import { JwtDTO } from './../models/jwt-dto';
import { catchError, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {TokenService} from "../../app/services/token.service";
import {AuthService} from "../../app/services/auth.service";

const AUTHORIZATION = 'Authorization';

@Injectable({
  providedIn: 'root'
})


export class ProdInterceptorService implements HttpInterceptor {


  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }

    let intReq = req;
    const token = this.tokenService.getToken();

    if (token) { // Verifica si el token no es nulo
      intReq = this.addToken(req, token);

      return next.handle(intReq).pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          const dto: JwtDTO = new JwtDTO(token); // Usa el token almacenado
          return this.authService.refresh(dto).pipe(concatMap((data: any) => {
            console.log('refreshing....');
            this.tokenService.setToken(data.token);
            intReq = this.addToken(req, data.token);
            return next.handle(intReq);
          }));
        } else {
          this.tokenService.logOut();
          return throwError(err);
        }
      }));
    } else {
      // Manejar el caso en que el token sea nulo, por ejemplo, redirigir a la página de inicio de sesión
      console.log('No se ha encontrado el token de autenticación.');
      return next.handle(req);
    }
  }


  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
  }
}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }];
