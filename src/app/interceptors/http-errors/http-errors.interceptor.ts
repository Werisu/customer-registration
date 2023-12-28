import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clonedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        Swal.fire({
          icon: 'error',
          text: 'houve um erro',
          toast: true,
          position: 'bottom',
          timer: 5000,
          showConfirmButton: false,
        });
        return throwError(() => error);
      })
    );
  }
}
