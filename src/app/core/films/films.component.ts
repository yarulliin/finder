import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostBinding,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { slideAnimation, swipeAnimations } from '../../utils/consts/animations.consts';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Film, FilmEvent, UpdateFilmMethod } from './utils/interfaces/films.interfaces';
import { Swipe } from '../../utils/interfaces/animations.interfaces';
import { FilmsFacadeService } from './services/films-facade.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fa-films',
  standalone: true,
  imports: [AsyncPipe, FilmCardComponent],
  animations: [slideAnimation, swipeAnimations],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {
  @HostBinding('@slide')
  true;
  @HostBinding('@swipe')
  public state: Swipe;

  @HostListener('@swipe.done')
  public resetState() {
    this.state = '';
  }

  public films$: Observable<Film[]> = this.filmsService.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    private readonly filmsService: FilmsFacadeService,
    private readonly destroyRef: DestroyRef,
  ) {}

  public updateFilm({ filmName, method }: FilmEvent): void {
    this.filmsService.updateFilm(filmName, method)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.changeSwipeState(method));
  }

  private changeSwipeState(method: UpdateFilmMethod): void {
    this.state = method === 'like'
      ? 'swipeRight'
      : 'swipeLeft';
  }
}
