import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { SvgService } from '../../utils/services/svg/svg.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'fa-svg',
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgComponent {
  @Input() public name: string = '';

  @HostBinding('innerHTML')
  public get use(): SafeHtml | undefined {
    return this.svgService.getIcon(this.name);
  }

  constructor(
    private readonly svgService: SvgService,
  ) {}
}
