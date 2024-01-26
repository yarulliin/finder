import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { slideAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-films',
  standalone: true,
  imports: [FilmCardComponent],
  host: { '[@slide]': 'true' },
  animations: [slideAnimation],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {

}
