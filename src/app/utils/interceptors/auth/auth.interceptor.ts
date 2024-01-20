import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthFacadeService } from '../../../core/auth/services/auth-facade.service';
import { authBlackList } from '../../consts/interceptors.consts';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const token = inject(AuthFacadeService).user?.AccessToken;
  const reqWithHeader = authBlackList.some(url => url !== req.url)
    ? req.clone({
        headers: req.headers.set('authorization', `Bearer ${token}`),
      })
    : req;

  return next(reqWithHeader);
};
