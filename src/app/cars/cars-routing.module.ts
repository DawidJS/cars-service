import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarResolve } from './car-resolve.service';



const carsRoutes: Routes = [

    {
        path: 'cars/:id', component: CarDetailsComponent,
        resolve: {car: CarResolve}
    }

];

@NgModule({
    imports: [RouterModule.forChild(carsRoutes)],
    exports: [RouterModule]
})
export class CarsRoutingModule { }
