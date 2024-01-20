import { headersInterceptor } from '../interceptors/headers/headers.interceptor';
import { clientIdInterceptor } from '../interceptors/clientId/client-id.interceptor';
import { authInterceptor } from '../interceptors/auth/auth.interceptor';
import { HttpInterceptorFn } from '@angular/common/http';
import { Urls } from '../enums/urls.enum';

export const interceptors: HttpInterceptorFn[] = [
  headersInterceptor,
  clientIdInterceptor,
  authInterceptor,
];

export const AUTH_BLACKLIST = [Urls.AUTH];
