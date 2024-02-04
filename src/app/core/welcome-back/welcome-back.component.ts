import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { TranslocoPipe } from '@ngneat/transloco';
import { slideAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-welcome-back',
  standalone: true,
  imports: [TranslocoPipe],
  animations: [slideAnimation],
  template: `
    <h3>{{ 'WelcomeBackComponent.message' | transloco }}, <span class="name">Name!</span></h3>
    <span>{{ 'WelcomeBackComponent.preparingDataMessage' | transloco }}</span>
  `,
  styleUrl: './welcome-back.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeBackComponent {
  @HostBinding('@slide') true;
}
