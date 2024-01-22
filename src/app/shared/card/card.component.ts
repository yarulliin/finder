import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-card, a[card]',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'card'
  }
})
export class CardComponent { }
