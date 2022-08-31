import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, Observable, of, tap } from 'rxjs';

import { Auth } from '../interface/auth.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'https://reqres.in/api';
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth!}
  }

  constructor( private http: HttpClient, private cookies: CookieService ) { }

  // verifyyAuth(): Observable<boolean> {

  //   if (!localStorage.getItem('token')) {
  //     return of(false);
  //   }

  //   return this.http.get<Auth>(`${this.apiUrl}/users/1`)
  //     .pipe(
  //       map(auth => {
  //         this._auth = auth;
  //         return true;
  //       })
  //     )

  // }

  // login(id: string) {
  //   return this.http.get<Auth>(`${this.apiUrl}/users/${id}`)
  //     .pipe(
  //       tap( auth => this._auth = auth ),
  //       tap( auth => localStorage.setItem('token', auth.id) )
  //     )
  // }

  login(user: Auth): Observable<any> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, user);
  }

  register(user: Auth): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post(url, user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  
  getToken() {
    return this.cookies.get("token");
  }

}
