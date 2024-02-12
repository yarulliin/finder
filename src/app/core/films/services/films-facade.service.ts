import { DestroyRef, Inject, Injectable } from '@angular/core';
import { FilmsApiService } from './films-api.service';
import { LocalStorageService } from '../../../utils/services/local-storage/local-storage.service';
import { LocalStorageKeys } from '../../../utils/enums/app.enums';
import { BehaviorSubject, filter, map, Observable, switchMap, tap, withLatestFrom } from 'rxjs';
import { Film, UpdateFilmMethod } from '../utils/interfaces/films.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SESSION_ID } from '../../../utils/tokens/app.tokens';

// TODO: investigate possibility to use signals
@Injectable({
  providedIn: 'root',
})
export class FilmsFacadeService extends BehaviorSubject<Film[]> {
  public get films$(): Observable<Film[]> {
    return this.asObservable();
  }

  constructor(
    @Inject(SESSION_ID) private readonly sessionId: string,
    private readonly filmsApiService: FilmsApiService,
    private readonly localStorageService: LocalStorageService,
    private readonly destroyRef: DestroyRef,
  ) {
    super([]);
  }

  public initFilms(): void {
    const films = this.localStorageService.getItem<Film[]>(LocalStorageKeys.FILMS) || [];

    this.next(films);
  }

  public updateFilm(filmName: string, method: UpdateFilmMethod): Observable<Film[]> {
    this.removeFilm();

    return this.filmsApiService.updateFilm(this.sessionId, method, filmName)
      .pipe(
        withLatestFrom(this),
        map(([_, films]: [void, Film[]]) => films.map((film: Film) => film.name)),
        switchMap((films: string[]) => this.getFilms(1, films)),
      );
  }

  public initFilmsListener(): void {
    this.pipe(
      filter((films: Film[]) => !films?.length),
      switchMap(() => this.getFilms()),
      takeUntilDestroyed(this.destroyRef),
    )
      .subscribe();
  }

  private removeFilm(): void {
    const films = this.value.slice(0, this.value.length - 1);

    this.setFilms(films);
  }

  private getFilms(filmsCount?: number, filmsToExclude?: string[]): Observable<Film[]> {
    return this.filmsApiService.getFilms(this.sessionId, filmsCount, filmsToExclude)
      .pipe(
        tap((films: Film[]) => {
          const data = [...films, ...this.localStorageService.getItem<Film[]>(LocalStorageKeys.FILMS) || []];

          this.setFilms(data);
        }),
      );
  }

  private setFilms(films: Film[]): void {
    this.next(films);
    this.localStorageService.setItem<Film[]>(LocalStorageKeys.FILMS, films);
  }
}
