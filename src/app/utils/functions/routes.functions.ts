import { CanActivateFn, Router } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { LocalStorageKeys, RoutesEnum } from '../enums/app.enums';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { isPlatformBrowser } from '@angular/common';

export const canActivateStartPage: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const localStorageService = inject(LocalStorageService);
    const sessionId = localStorageService.getItem(LocalStorageKeys.SESSION_ID);

    if (sessionId) {
      const router = inject(Router);

      // router.navigate([`/${RoutesEnum.FILMS}`]);
    }

    return !!sessionId;
  }

  return true;
};
