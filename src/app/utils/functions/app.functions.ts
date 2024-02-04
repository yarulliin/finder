import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders, PLATFORM_ID } from '@angular/core';
import { LocalStorageKeys } from '../enums/app.enums';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { FactoryReturnType } from '../interfaces/app.interfaces';
import { generateUUID } from './uuid.functions';
import { isPlatformBrowser } from '@angular/common';

export const isPresent = <T>(value: T | null): value is T =>
  value !== null && value !== undefined && value !== '';

export const sessionIdInitializer = (
  localStorageService: LocalStorageService,
  platformId: Object,
): FactoryReturnType => {
  return (): void => {
    if (isPlatformBrowser(platformId)) {
      const sessionId = localStorageService.getItem<string>(LocalStorageKeys.SESSION_ID);

      if (!sessionId) {
        localStorageService.setItem<string>(LocalStorageKeys.SESSION_ID, generateUUID());
      }
    }
  }
};

export const provideSessionIdInitializer = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: APP_INITIALIZER,
    useFactory: sessionIdInitializer,
    multi: true,
    deps: [LocalStorageService, PLATFORM_ID],
  },
]);
