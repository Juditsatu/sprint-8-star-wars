import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { People, Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private apiUrl: string = 'https://swapi.dev/api';

  constructor( private http: HttpClient ) { }

  getAllStarships(page: number): Observable<Starship> {
    const url = `${this.apiUrl}/starships/?page=${ page }`;
    return this.http.get<Starship>(url);
  }

  getStarship(id: string): Observable<Starship> {
    const url = `${this.apiUrl}/starships/${ id }`;
    return this.http.get<Starship>(url);
  }

  getPilots(id: string): Observable<People> {
    const url = `${this.apiUrl}/people/${ id }`;
    return this.http.get<People>(url);
  }
  
}