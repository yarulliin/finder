import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';

@Component({
  selector: 'fa-not-found',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}
