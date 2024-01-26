import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { routeAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  host: { '[@routeAnimation]': 'true' },
  animations: [routeAnimation],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

}
