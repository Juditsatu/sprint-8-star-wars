import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Result } from '../../interfaces/starship.interface';
import { StarshipsService } from '../../services/starships.service';
import { IdPipe } from '../../pipes/id.pipe';

@Component({
  selector: 'app-starship-info',
  templateUrl: './starship-info.component.html',
  styleUrls: ['./starship-info.component.scss']
})
export class StarshipInfoComponent implements OnInit {

  constructor( private starshipService: StarshipsService,
               private activateRoute: ActivatedRoute ) { }

  @Input() starship!: Result;

  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships/';
  noImage: string = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
  idImg: string = '';

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.starshipService.getStarship(id)),
        tap(console.log)
      )
      .subscribe(starship => {
        this.starship = starship
        this.idImg = starship.url.replace(/\D/g, '');
      });
  }

  getImage(): string {
    return `${this.urlImg + this.idImg}.jpg`;
  }

}
