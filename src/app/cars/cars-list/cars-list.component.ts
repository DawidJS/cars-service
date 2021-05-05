import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { CarsService } from '../cars.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  @ViewChild('totalCostRef', { static: false }) totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;

  cars: Car[];

  constructor(
    private carsServive: CarsService,
    private router: Router
  ) { }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  ngOnInit() {
    this.loadCars();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  AfterViewInit() {
    this.totalCostRef.showGross();
  }

  loadCars(): void {
    this.carsServive.getCars().subscribe(car => {
      this.cars = car;
      this.countTotalCost();
    });
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  };

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }


}
