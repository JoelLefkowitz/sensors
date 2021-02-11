import { Observable, combineLatest, of } from 'rxjs';
import { Paginated, PaginatorConfig, defaultPaginatorConfig } from 'src/api/paginator.model';
import { SensorData, mockSensorData } from 'src/api/sensor-data.model';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  backend = environment.apiHost.concat("api/sensors/")

  constructor(private http: HttpClient, private restService: RestService) { }
  
  sensorData(limit?: number, offset?: number): Observable<Paginated<SensorData>> {    
    return this.http.get<Paginated<SensorData>>(
      this.backend.concat(this.restService.paginationBuilder(limit, offset)),
      this.restService.defaultHeaders
    ).pipe(
      catchError(this.restService.handleError)
    )
  }
  
  mockSensorData(count: number = 100): Observable<Paginated<SensorData>> {
    return of(
      {
        count,
        next: 1,
        previous: 0,
        results: [
          ...Array.from(Array(count).keys()).map(_ => mockSensorData),
        ].sort(_ => 0.5 - Math.random())
      }
    ) 
  }
}
