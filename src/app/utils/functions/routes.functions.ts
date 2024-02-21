import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LocalStorageKeys, RoutesEnum } from '../enums/app.enums';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { isBrowser } from '@ngneat/transloco';

export const canActivateStartPage: CanActivateFn = () => {
  if (isBrowser()) {
    const localStorageService = inject(LocalStorageService);
    const sessionId = localStorageService.getItem(LocalStorageKeys.SESSION_ID);

    if (sessionId) {
      const router = inject(Router);

      router.navigate([`/${RoutesEnum.FILMS}`]);
    }

    return !!sessionId;
  }

  return true;
};
