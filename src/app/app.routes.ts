import { Routes } from '@angular/router';
import { RoutesEnum } from './utils/enums/app.enums';

export const routes: Routes = [
  {
    path: RoutesEnum.EMPTY,
    loadChildren: () => import('./core/layout/consts/layout.routes'),
  },
  {
    path: RoutesEnum.AUTH,
    loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent),
  },
  {
    path: RoutesEnum.UNKNOWN,
    loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
