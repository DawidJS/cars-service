import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CarsService } from './cars.service';
import { SharedModule } from '../shared-module/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './car-resolve.service';


@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    RouterModule,

  ],
  exports: [
    CarsListComponent,
    TotalCostComponent
  ],
  providers: [
    CarsService,
    CarResolve
  ]
})
export class CarsModule { }
