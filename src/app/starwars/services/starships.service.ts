import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private apiUrl: string = 'https://swapi.dev/api/starships';

  constructor( private http: HttpClient ) { }

  getAllStarships(page: number): Observable<Starship> {
    const url = `${this.apiUrl}/?page=${ page }`;
    return this.http.get<Starship>(url);
  }

  getStarship(id: string): Observable<Starship> {
    const url = `${this.apiUrl}/${ id }`;
    return this.http.get<Starship>(url);
  }
  
}