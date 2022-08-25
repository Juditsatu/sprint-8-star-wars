import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private apiUrl: string = 'https://swapi.dev/api/starships/';

  constructor( private http: HttpClient ) { }

  getAllStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.apiUrl);
  }

  getStarship(id: string): Observable<Starship> {
    const url = `${this.apiUrl}${ id }`;
    return this.http.get<Starship>(url);
  }
  
}
