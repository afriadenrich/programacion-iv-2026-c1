import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { map, tap } from 'rxjs';
const API_KEY = '4T9ByHIFiKfOBKc4cJHb8NiC5xLpcgdesalkrKU0';

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const requestConLaApiKey = req.clone({
    params: req.params.set('api_key', API_KEY),
  });

  return next(requestConLaApiKey).pipe(
    // Me devuelve todo el objeto
    tap((data: any) => {
      if (data.type === HttpEventType.Response) {
        if (data.body.url.includes('.mp4')) {
          data.body.url = 'error.png';
        }
      }
      return data;
    }),
  );
};

// Map mapea, itera si es un array, sino devuelve todo el objeto.
// map((data: any) => {
//   if (data.type === HttpEventType.Response) {
//     if (data.body.url.includes('.mp4')) {
//       data.body.url = 'error.png';
//     }
//   }
//   return data;
// }),
