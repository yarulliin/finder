import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'fa-get-started',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetStartedComponent { }
