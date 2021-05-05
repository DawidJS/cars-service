import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';


const routes: Routes = [

  { path: 'cars', component: CarsListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'cars'}, // przekieruje jak nic nie bedzie wybrane

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
