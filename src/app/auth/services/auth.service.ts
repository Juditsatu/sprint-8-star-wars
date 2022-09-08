import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of, tap } from 'rxjs';

import { Auth } from '../interface/auth.interface';

import { environment } from 'src/environments/environment';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth!}
  }

  constructor( private http: HttpClient ) { }

  verifyAuth(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/users/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      )
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id))
      )
  }

}
