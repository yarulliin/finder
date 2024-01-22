import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fa-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent {

}
