import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostBinding,
  HostListener,
} from '@angular/core';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { slideAnimation, swipeAnimations } from '../../utils/consts/animations.consts';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Film, UpdateFilmMethod } from './utils/interfaces/films.interfaces';
import { Swipe } from '../../utils/interfaces/animations.interfaces';
import { FilmsFacadeService } from './services/films-facade.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { TranslocoPipe } from '@ngneat/transloco';
import { SwipeDirective } from './directives/swipe/swipe.directive';

@Component({
  selector: 'fa-films',
  standalone: true,
  imports: [
    AsyncPipe,
    SlicePipe,
    FilmCardComponent,
    LoaderComponent,
    TranslocoPipe,
    SwipeDirective,
  ],
  animations: [slideAnimation, swipeAnimations],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public films$: Observable<Film[]> = this.filmsService.films$;

  constructor(
    private readonly filmsService: FilmsFacadeService,
    private readonly destroyRef: DestroyRef,
  ) {}

  public swipe(state: UpdateFilmMethod, name: string): void {
    this.changeSwipeState(state);
    this.filmsService.updateFilm(name, state)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  private changeSwipeState(method: UpdateFilmMethod): void {
    this.state = method === 'like'
      ? 'swipeRight'
      : 'swipeLeft';
  }
}
