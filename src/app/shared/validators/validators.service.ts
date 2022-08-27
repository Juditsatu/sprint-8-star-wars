import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
  
  //Validate email
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

}
