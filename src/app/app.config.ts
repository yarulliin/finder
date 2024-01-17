import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './utils/interceptors/headers/headers.interceptor';
import { clientIdInterceptor } from './utils/interceptors/clientId/client-id.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([headersInterceptor, clientIdInterceptor]),
    ),
    provideClientHydration(),
  ]
};
