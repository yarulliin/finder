import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { RoutesEnum } from '../../utils/enums/app.enums';
import { RouterLink } from '@angular/router';
import { slideAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-get-started',
  standalone: true,
  imports: [TranslocoModule,  RouterLink],
  host: { '[@slide]': 'true' },
  animations: [slideAnimation],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetStartedComponent {
  public readonly routes = RoutesEnum;
}
