import { clientIdInterceptor } from '../interceptors/clientId/client-id.interceptor';
import { authInterceptor } from '../interceptors/auth/auth.interceptor';
import { HttpInterceptorFn } from '@angular/common/http';

export const interceptors: HttpInterceptorFn[] = [
  clientIdInterceptor,
  authInterceptor,
];
