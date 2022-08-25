import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Result } from '../../interfaces/starship.interface';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.scss']
})
export class StarshipInfoComponent implements OnInit {

  constructor( private starshipService: StarshipsService,
               private activateRoute: ActivatedRoute ) { }

  @Input() starship!: Result;

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.starshipService.getStarship(id)),
        tap(console.log)
      )
      .subscribe(starship => this.starship = starship)
  }

}
