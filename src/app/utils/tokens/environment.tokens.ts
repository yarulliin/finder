import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export const API_URL: InjectionToken<string> = new InjectionToken<string>(
  'API token',
  {
    factory: () => environment.baseUrl
  }
);

export const CLIENT_ID: InjectionToken<string> = new InjectionToken<string>(
  'Client id',
  {
    factory: () => environment.clientId
  }
);
