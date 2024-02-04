import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-card, a[card]',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'card'
  }
})
export class CardComponent { }
