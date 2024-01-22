import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageKeys, RoutesEnum } from '../enums/app.enums';

export const canActivateStartPage: CanActivateFn = () => {
  const localStorageService = inject(LocalStorageService);
  const authData = localStorageService.getItem(LocalStorageKeys.AUTH);

  if (authData) {
    const router = inject(Router);

    router.navigate([`/${RoutesEnum.FILMS}`]);
  }

  return !!authData;
};
