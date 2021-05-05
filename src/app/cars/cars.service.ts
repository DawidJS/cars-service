import { Injectable } from '@angular/core';
import { Car } from './models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  // tslint:disable-next-line:no-inferrable-types
  private apiUrl: string = 'http://localhost:3000/api/cars';
  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.apiUrl + `/${id}`);
  }

}
