import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgService } from './utils/services/svg/svg.service';
import { sunSVG } from '../assets/icons/sun';
import { moonSVG } from '../assets/icons/moon';
import { SvgComponent } from './shared/svg/svg.component';
import { Theme } from './utils/enums/theme.enums';
import { ThemeService } from './utils/services/theme/theme.service';

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
  public readonly icon: Signal<string> = computed(
    () => this.themeService.theme() === Theme.LIGHT ? 'moon' : 'sun',
  );

  constructor(
    private readonly svgService: SvgService,
    private readonly themeService: ThemeService,
  ) {
    svgService.define({
      sun: sunSVG,
      moon: moonSVG,
    });
  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
