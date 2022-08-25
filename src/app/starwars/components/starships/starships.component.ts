import { Component, Input, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

import { Result } from '../../interfaces/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor( private starshipService: StarshipsService ) { }

  @Input() starships: Result[] = [];

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    this.starshipService.getAllStarships()
      .subscribe({
        next: (response: any) => {
          this.starships = response.results;
          console.log(this.starships)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
