import { CarsService } from './cars.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Car } from './models/car';
import { Injectable } from '@angular/core';

@Injectable()
// tslint:disable-next-line:max-line-length
export class CarResolve implements Resolve<Car> { // implementacja oznacza ze podpisujemy kontrakt na uzycie takiej metody bedzie obowiazkowe

    constructor(private carsService: CarsService) { }

    resolve(route: ActivatedRouteSnapshot) {  // daje nam dostep do sciezki w ktorej konkretnie jestesmy
        return this.carsService.getCar(route.params.id);
    }

}

  