import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { StarWarsPersonComponent } from './star-wars-person/star-wars-person.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'star-wars-person/:id', component: StarWarsPersonComponent },
  { path: 'people-table', component: PeopleTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
