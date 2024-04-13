import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgService } from './utils/services/svg/svg.service';
import { sunSVG } from '../assets/icons/sun';
import { moonSVG } from '../assets/icons/moon';
import { SvgComponent } from './shared/svg/svg.component';

@Component({
  selector: 'fa-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SvgComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private readonly svgService: SvgService,
  ) {
    svgService.define({
      sun: sunSVG,
      moon: moonSVG,
    });
  }
}
