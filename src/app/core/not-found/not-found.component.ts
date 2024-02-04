import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { fadeAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-not-found',
  standalone: true,
  imports: [TranslocoPipe],
  animations: [fadeAnimation],
  template: `
    <h3>{{ 'NotFoundComponent.notFoundLabel' | transloco }}</h3>
  `,
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  @HostBinding('@fade') true;
}
