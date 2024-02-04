import { HttpParams } from '@angular/common/http';
import { isPresent } from './app.functions';

export const createHttpParams = (params: Record<string, unknown>): HttpParams => {
  let httpParams: HttpParams = new HttpParams();

  if (params) {
    Object.keys(params).forEach((param: string) => {
      const value = params[param];
      const transformToHttpCondition = isPresent<unknown>(value);

      if (transformToHttpCondition) {
        if (Array.isArray(value)) {
          value.forEach(valueItem => (httpParams = httpParams.append(param, valueItem)));
        } else {
          httpParams = httpParams.set(param, params[param] as string);
        }
      }
    });
  }

  return httpParams;
};
