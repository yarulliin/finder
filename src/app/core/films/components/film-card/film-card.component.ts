import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';
import { LineClampComponent } from '../../../../shared/line-clamp/line-clamp.component';
import { Film, UpdateFilmMethod } from '../../utils/interfaces/films.interfaces';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'fa-film-card',
  standalone: true,
  imports: [
    CardComponent,
    LineClampComponent,
    AsyncPipe,
  ],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCardComponent {
  @Input() public film: Film;

  @Output() public readonly emitSwipe: EventEmitter<UpdateFilmMethod> = new EventEmitter<UpdateFilmMethod>();

  public get image(): string {
    const [image] = this.film.movieImages.posters;

    return `url(${image.file_path})`;
  }

  public updateFilm(method: UpdateFilmMethod): void {
    this.emitSwipe.emit(method);
  }
}
