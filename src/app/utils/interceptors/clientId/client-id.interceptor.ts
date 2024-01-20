import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CLIENT_ID } from '../../tokens/environment.tokens';

export const clientIdInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const clientId = inject(CLIENT_ID);
  const reqWithClientId = req.method.toLowerCase() === 'post'
    ? req.clone({
        body: { ...req.body || {}, ClientId: clientId }
      })
    : req;

  return next(reqWithClientId);
};
