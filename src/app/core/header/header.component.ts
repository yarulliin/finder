import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@ngneat/transloco';
import { RoutesEnum } from '../../utils/enums/app.enums';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'fa-header',
  standalone: true,
  imports: [TranslocoDirective, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly routes = RoutesEnum;
}
