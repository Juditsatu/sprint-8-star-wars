import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private apiUrl: string = 'https://swapi.dev/api/starships/?page=1';

  constructor( private http: HttpClient ) { }

  getStarships(): Observable<Starship[]> {
    const url = `${this.apiUrl}`
    return this.http.get<Starship[]>(url);
  }
}
