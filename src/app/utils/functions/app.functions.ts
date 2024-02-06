import { EnvironmentProviders, makeEnvironmentProviders, PLATFORM_ID } from '@angular/core';
import { LocalStorageKeys } from '../enums/app.enums';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { generateUUID } from './uuid.functions';
import { isPlatformBrowser } from '@angular/common';
import { SESSION_ID } from '../tokens/app.tokens';

export const isPresent = <T>(value: T | null): value is T =>
  value !== null && value !== undefined && value !== '';

export const sessionIdInitializer = (
  localStorageService: LocalStorageService,
  platformId: Object,
): string | void => {
  if (isPlatformBrowser(platformId)) {
    let sessionId = localStorageService.getItem<string>(LocalStorageKeys.SESSION_ID);

    if (!sessionId) {
      sessionId = generateUUID();
      localStorageService.setItem<string>(LocalStorageKeys.SESSION_ID, sessionId);
    }

    return sessionId;
  }
};

export const provideSessionId = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: SESSION_ID,
    useFactory: sessionIdInitializer,
    deps: [LocalStorageService, PLATFORM_ID],
  },
]);
