import { Routes } from '@angular/router';
import { canActivateStartPage } from './utils/functions/routes.functions';
import { RoutesEnum } from './utils/enums/app.enums';

export const routes: Routes = [
  {
    path: RoutesEnum.EMPTY,
    loadComponent: () => import('./core/get-started/get-started.component').then(m => m.GetStartedComponent),
    canActivate: [canActivateStartPage]
  },
  {
    path: RoutesEnum.AUTH,
    loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent),
  },
  {
    path: RoutesEnum.FILMS,
    loadComponent: () => import('./core/films/films.component').then(m => m.FilmsComponent),
  },
  {
    path: RoutesEnum.ANY,
    loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
