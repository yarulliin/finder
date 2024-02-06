import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-loader',
  standalone: true,
  template: `
    <h3>
      <ng-content></ng-content>
      <span class="dot">.</span>
      <span class="dot">.</span>
      <span class="dot">.</span>
    </h3>
  `,
  styleUrl: './loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {}
