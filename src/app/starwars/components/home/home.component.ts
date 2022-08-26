import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

interface Image {
  title: string;
  img?: string;
  desc: string;
  src: string;
  btn: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent {

  constructor( config: NgbCarouselConfig ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

  images: Image[] = [
    { 
      title: '', 
      img: 'https://lumiere-a.akamaihd.net/v1/images/cyd-logotitle-1000_c54c7b01.png?region=0,0,1000,595', 
      desc: '<b>Announcing <i>Star Wars</i>: Choose Your Destiny program and sweepstakes!</b>', 
      src: 'https://lumiere-a.akamaihd.net/v1/images/cyd_homepage_hero_2048x870_f6779256.jpeg?region=0,0,2048,870&width=1920',
      btn: 'EXPLORE'
    },
    { 
      title: '<b>New <i>Star Wars Jedi</i> Books Revealed</b>', 
      desc: '<b>Two essential releases will take fans inside the world of the <i>Star Wars Jedi</i> game franchise — and behind the scenes.&nbsp;</b>', 
      src: 'https://lumiere-a.akamaihd.net/v1/images/swj-book-new-swcom-slide-desktop-_2_6bf5bd0e.jpeg?region=0,0,2048,870&width=1920',
      btn: 'READ MORE'
    },
  ]
}