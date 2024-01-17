import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('Content-Type', 'application/x-amz-json-1.1'),
  });

  return next(reqWithHeader);
};
