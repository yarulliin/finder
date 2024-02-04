import { RoutesEnum } from '../../../utils/enums/app.enums';
import { canActivateStartPage } from '../../../utils/functions/routes.functions';
import { LayoutComponent } from '../layout.component';

export default [
  {
    path: RoutesEnum.EMPTY,
    component: LayoutComponent,
    children: [
      {
        path: RoutesEnum.EMPTY,
        loadComponent: () => import('../../../core/get-started/get-started.component').then(c => c.GetStartedComponent),
        canActivate: [canActivateStartPage]
      },
      {
        path: RoutesEnum.FILMS,
        loadComponent: () => import('../../../core/films/films.component').then(c => c.FilmsComponent),
      },
      {
        path: RoutesEnum.WELCOME,
        loadComponent: () => import('../../../core/welcome-back/welcome-back.component').then(c => c.WelcomeBackComponent),
      },
    ]
  },
];
