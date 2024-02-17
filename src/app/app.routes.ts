import { Routes } from '@angular/router';
import { RoutesEnum } from './utils/enums/app.enums';

export const routes: Routes = [
  {
    path: RoutesEnum.EMPTY,
    loadChildren: () => import('./core/layout/consts/layout.routes'),
  },
  {
    path: RoutesEnum.UNKNOWN,
    loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];
