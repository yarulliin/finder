import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { Languages } from './utils/enums/languages.enums';
import { AVAILABLE_LANGUAGES } from './utils/consts/languages.consts';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideSessionIdInitializer } from './utils/functions/app.functions';
import { interceptors } from './utils/consts/interceptors.consts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors(interceptors),
    ),
    provideClientHydration(),
    provideSessionIdInitializer(),
    provideTransloco({
      config: {
        availableLangs: AVAILABLE_LANGUAGES,
        defaultLang: Languages.EN,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ]
};
