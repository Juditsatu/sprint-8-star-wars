import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../../services/starships.service';

import { Result, Starship } from '../../interfaces/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  constructor( private starshipService: StarshipsService ) { }

  starships: Result[] = [];
  page: number = 1;
  loading: boolean = false;

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships() {
    this.starshipService.getAllStarships(this.page)
      .subscribe({
        next: (response: Starship) => {
          this.starships = response.results;
          //set spinner while loading response
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

  onScroll(): void {
    this.starshipService.getAllStarships(++this.page)
      .subscribe((response: Starship) => {
        this.starships.push(...response.results);
        console.log('loaded',this.starships)
      })
  }

}