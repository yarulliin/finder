import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilmCardComponent } from './components/film-card/film-card.component';

@Component({
  selector: 'fa-films',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {

}
