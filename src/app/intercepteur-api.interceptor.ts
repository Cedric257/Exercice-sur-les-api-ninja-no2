import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environment/environment';

export const apiIntercepteurInterceptor: HttpInterceptorFn = (req, next) => {
  const cleApi = environment.api_Key;

  const request_header = req.clone({
    headers: req.headers.set(
      'X-Api-key',
      cleApi
    )
  })
  return next(request_header);
};
