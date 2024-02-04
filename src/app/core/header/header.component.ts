import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { RoutesEnum } from '../../utils/enums/app.enums';
import { RouterLink } from '@angular/router';
import { fadeAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-header',
  standalone: true,
  imports: [TranslocoDirective, RouterLink],
  animations: [fadeAnimation],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('@fade') true;

  public readonly routes = RoutesEnum;
}
