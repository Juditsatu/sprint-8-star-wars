import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';
import { IdPipe } from './pipes/id.pipe';
import { PilotsComponent } from './components/pilots/pilots.component';


@NgModule({
  declarations: [
    HomeComponent,
    StarshipsComponent,
    StarshipInfoComponent,
    IdPipe,
    PilotsComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    NgbModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
