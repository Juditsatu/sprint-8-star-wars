import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StarshipInfoComponent } from './components/starship-info/starship-info.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },  
      { path: 'starships', component: StarshipsComponent },
      { path: 'starships/:id', component: StarshipInfoComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarwarsRoutingModule { }
