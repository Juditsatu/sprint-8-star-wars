import { Component, Input, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

import { Result, Starship } from '../../interfaces/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor( private starshipService: StarshipsService ) { }

  @Input() starships: Result[] = [];
  
  loading: boolean = false;

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    this.starshipService.getAllStarships()
      .subscribe({
        next: (response: any) => {
          this.starships = response.results;
          if (response) {
            this.loading = true;
          }
          console.log(this.starships)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
