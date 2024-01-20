import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { interceptors } from './utils/consts/interceptors.consts';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { Langs } from './utils/enums/langs.enums';
import { AVAILABLE_LANGS } from './utils/consts/langs.consts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors(interceptors),
    ),
    provideClientHydration(),
    provideHttpClient(),
    provideTransloco({
        config: {
          availableLangs: AVAILABLE_LANGS,
          defaultLang: Langs.EN,
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
  ]
};
