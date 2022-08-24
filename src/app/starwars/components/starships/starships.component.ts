import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

import { Starship } from '../../interfaces/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor( private starshipService: StarshipsService) { }

  ngOnInit(): void {

    this.getStarships();

  }

  getStarships() {
    this.starshipService.getStarships()
      .subscribe({
        next: (res: Starship) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
