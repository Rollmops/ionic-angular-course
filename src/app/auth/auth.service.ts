import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _userIsAtuthenticated = false;

  get userIsAuthenticated() {
    return this._userIsAtuthenticated;
  }

  constructor() { }

  login() {
    this._userIsAtuthenticated = true;
  }

  logout() {
    this._userIsAtuthenticated = false;
  }
}
