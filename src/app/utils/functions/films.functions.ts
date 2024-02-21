import { FactoryReturnType } from '../interfaces/app.interfaces';
import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { FilmsFacadeService } from '../../core/films/services/films-facade.service';
import { isBrowser } from '@ngneat/transloco';

export const filmsInitializer = (
  filmsService: FilmsFacadeService,
): FactoryReturnType => {
  return (): void => {
    if (isBrowser()) {
      filmsService.initFilms();
    }
  };
};

export const filmsListener = (
  filmsService: FilmsFacadeService,
): FactoryReturnType => {
  return (): void => {
    if (isBrowser()) {
      filmsService.initFilmsListener();
    }
  };
};

export const provideFilmsInitializer = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: APP_INITIALIZER,
    useFactory: filmsInitializer,
    multi: true,
    deps: [FilmsFacadeService],
  },
]);

export const provideFilmsListener = (): EnvironmentProviders => makeEnvironmentProviders([
  {
    provide: APP_INITIALIZER,
    useFactory: filmsListener,
    multi: true,
    deps: [FilmsFacadeService],
  },
]);
