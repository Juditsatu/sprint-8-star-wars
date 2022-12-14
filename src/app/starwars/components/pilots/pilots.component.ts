import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Result, People } from '../../interfaces/starship.interface';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent implements OnInit {

  constructor( private starshipService: StarshipsService,
               private activateRoute: ActivatedRoute ) { }

  @Input() pilots: People[] = [];

  urlImg: string = 'https://starwars-visualguide.com/assets/img/characters';

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.starshipService.getStarship(id)),
        tap(console.log)
      )
      .subscribe({
        next: (starship: Result) => {
          //extract the id of each url in the pilots array
          starship.pilots.forEach((id: string) => 
          this.starshipService.getPilots(id.replace(/\D/g, ''))
          .subscribe((pilots: People) => this.pilots.push(pilots))
          )
        },
        error: (err) => { console.log(err) }
      });
  }
}