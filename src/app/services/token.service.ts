import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles: Array<string> = [];

  constructor(
    private router: Router
  ) { }

  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }


  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getUserName(): string | null {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const parts = token.split('.');
    if (parts.length < 2) {
      return null;
    }
    const payload = parts[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const username = values.sub;
    return username;
  }


  public isAdmin(): boolean {
    if (!this.isLogged()) {
      return false;
    }
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const parts = token.split('.');
    if (parts.length < 2) {
      return false;
    }
    const payload = parts[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const roles = values.roles;
    // Check if roles is defined and is an array
    if (!roles || !Array.isArray(roles)) {
      return false;
    }
    // Check if the 'ROLE_ADMIN' role exists in the roles array
    if (roles.indexOf('ROLE_ADMIN') < 0) {
      return false;
    }
    return true;
  }



  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}