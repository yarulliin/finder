import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthFacadeService } from '../../../core/auth/services/auth-facade.service';
import { Urls } from '../../enums/urls.enum';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const token = inject(AuthFacadeService).user?.AccessToken;

  const reqWithHeader = !token || req.url === Urls.AUTH
    ? req
    : req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`),
      });

  return next(reqWithHeader);
};
