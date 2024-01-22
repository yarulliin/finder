import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-input, input[faInput]',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'input'
  }
})
export class InputComponent {

}
