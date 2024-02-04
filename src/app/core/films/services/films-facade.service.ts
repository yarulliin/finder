import { DestroyRef, Injectable, } from '@angular/core';
import { FilmsApiService } from './films-api.service';
import { LocalStorageService } from '../../../utils/services/local-storage/local-storage.service';
import { LocalStorageKeys } from '../../../utils/enums/app.enums';
import { BehaviorSubject, filter, Observable, switchMap, tap } from 'rxjs';
import { Film, UpdateFilmMethod } from '../utils/interfaces/films.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BATCH_SIZE } from '../utils/consts/films.consts';
import { bind } from '../../../utils/decorators/bind.decorator';

@Injectable({
  providedIn: 'root',
})
export class FilmsFacadeService extends BehaviorSubject<Film[]> {
  constructor(
    private readonly filmsApiService: FilmsApiService,
    private readonly localStorageService: LocalStorageService,
    private readonly destroyRef: DestroyRef
  ) {
    super([]);
  }

  public initFilms(): void {
    const films = this.localStorageService.getItem<Film[]>(LocalStorageKeys.FILMS) || [];

    this.next(films);
  }

  // TODO: change return type to void
  public updateFilm(filmName: string, method: UpdateFilmMethod): Observable<string> {
    const sessionId = this.localStorageService.getItem<string>(LocalStorageKeys.SESSION_ID);

    return this.filmsApiService.updateFilm(sessionId, method, filmName)
      .pipe(tap(this.removeFilm));
  }

  public initFilmsListener(): void {
    this.pipe(
      filter((films: Film[]) => !films?.length || films.length === BATCH_SIZE - 1),
      switchMap(this.getFilms),
      takeUntilDestroyed(this.destroyRef),
    )
      .subscribe();
  }

  @bind
  private getFilms(): Observable<Film[]> {
    const sessionId = this.localStorageService.getItem<string>(LocalStorageKeys.SESSION_ID);

    return this.filmsApiService.getFilms(sessionId)
      .pipe(
        tap((films: Film[]) => {
          const data = [...films, ...this.localStorageService.getItem<Film[]>(LocalStorageKeys.FILMS) || []];

          this.next(data);
          this.localStorageService.setItem<Film[]>(LocalStorageKeys.FILMS, data);
        }),
      );
  }

  @bind
  private removeFilm(): void {
    const films = this.value.slice(0, this.value.length - 1);

    this.localStorageService.setItem<Film[]>(LocalStorageKeys.FILMS, films);
    this.next(films);
  }
}
