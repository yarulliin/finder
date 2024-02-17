import { FactoryReturnType } from '../interfaces/app.interfaces';
import { isPlatformBrowser } from '@angular/common';
import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders, PLATFORM_ID } from '@angular/core';
import { FilmsFacadeService } from '../../core/films/services/films-facade.service';

export const filmsInitializer = (
  filmsService: FilmsFacadeService,
  platformId: string,
): FactoryReturnType => {
  return (): void => {
    if (isPlatformBrowser(platformId)) {
      filmsService.initFilms();
    }
  };
};

export const filmsListener = (
  filmsService: FilmsFacadeService,
  platformId: string,
): FactoryReturnType => {
  return (): void => {
    if (isPlatformBrowser(platformId)) {
      filmsService.initFilmsListener();
    }
  };
};

export const provideFilmsInitializer = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: APP_INITIALIZER,
    useFactory: filmsInitializer,
    multi: true,
    deps: [FilmsFacadeService, PLATFORM_ID],
  },
]);

export const provideFilmsListener = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: APP_INITIALIZER,
    useFactory: filmsListener,
    multi: true,
    deps: [FilmsFacadeService, PLATFORM_ID],
  },
]);
