import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';
import { IdPipe } from './pipes/id.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    StarshipsComponent,
    StarshipInfoComponent,
    IdPipe
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
