import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IResponseLogin } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor(
      private http: HttpClient
  ) { }

  registerUser({ email, password, name }: { email: string; password: string; name: string; }): Observable<string> {
   
    return this.http.post("https://calabozoapi.onrender.com/auth/nuevo", {email, password, nombreUsuario:name, nombre:name}).pipe(
      map(
        (response:responseUser) => response.mensaje
      )
    )
  }

  authenticateUser({ nombreUsuario, password }: { nombreUsuario: string; password: string; }): Observable<IResponseLogin> {
    return this.http.post("https://calabozoapi.onrender.com/auth/login", {nombreUsuario, password}).pipe(
      map(
        (response:IResponseLogin) => response
      )
    )
    // this.isAuthenticatedSubject.next(true);
    // return this.isAuthenticatedSubject.asObservable();
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
}

interface responseUser{
  mensaje:string
}

