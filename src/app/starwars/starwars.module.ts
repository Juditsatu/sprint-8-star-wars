import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarwarsRoutingModule } from './starwars-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';


@NgModule({
  declarations: [
    HomeComponent,
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarwarsRoutingModule
  ]
})
export class StarwarsModule { }
