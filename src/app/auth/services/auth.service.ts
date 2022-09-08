import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of, tap } from 'rxjs';

import { User } from '../interface/user.interface';

import { environment } from 'src/environments/environment';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user: User | undefined;

  get auth() {
    return {...this._user!}
  }

  constructor( private http: HttpClient ) { }

  verifyAuth(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        map(user => {
          this._user = user;
          return true;
        })
      )
  }

  login() {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this._user = user),
        tap(user => localStorage.setItem('token', user.id))
      )
  }

}
