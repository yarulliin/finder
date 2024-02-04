import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { fadeAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-loader',
  standalone: true,
  template: `
    <span class="loader"></span>
  `,
  animations: [fadeAnimation],
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  @HostBinding('@fade') true;
}
