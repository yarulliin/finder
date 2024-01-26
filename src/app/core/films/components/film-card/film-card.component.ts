import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from '../../../../shared/card/card.component';

@Component({
  selector: 'fa-film-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmCardComponent {

}
