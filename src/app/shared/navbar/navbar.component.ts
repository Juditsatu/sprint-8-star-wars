import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;  
  starShipActive: boolean = false;
  homeActive: boolean = false;

  setStarShipActive() {
    this.starShipActive = true;
    this.homeActive = false;
  }

  setHomeActive() {
    this.starShipActive = false;
    this.homeActive = true;
  }

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }

}
