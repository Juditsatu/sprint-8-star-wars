import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isCollapsed = true;
  public isLogged = false;

  get user() {
    return this.authService.auth;
  }
  
  constructor( public router: Router, private authService: AuthService ) { }

  userIsLogged() {
    if (localStorage.getItem('token')) {
      this.isLogged = true;
    }
  }

  logout() {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['/']);
  }

}
