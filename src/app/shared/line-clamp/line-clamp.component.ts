import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'fa-line-clamp, div[lineClamp], span[lineClamp]',
  standalone: true,
  templateUrl: './line-clamp.component.html',
  styleUrl: './line-clamp.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LineClampComponent {
  @HostBinding('class.expanded')
  public expanded: boolean = false;

  public toggle(): void {
    this.expanded = !this.expanded;
  }
}
