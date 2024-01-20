import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiUrls } from '../interfaces/app.interfaces';

export const API_URL: InjectionToken<ApiUrls> = new InjectionToken<ApiUrls>(
  'API token',
  {
    factory: () => environment.urlsEnum
  }
);

export const CLIENT_ID: InjectionToken<string> = new InjectionToken<string>(
  'Client id',
  {
    factory: () => environment.clientId
  }
);
