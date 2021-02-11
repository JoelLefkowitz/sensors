import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, combineLatest, of, throwError } from 'rxjs';
import { Paginated, PaginatorConfig, defaultPaginatorConfig } from 'src/api/paginator.model';
import { SensorData, mockSensorData } from 'src/api/sensor-data.model';
import { debounceTime, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }
  
  get defaultHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })}
  }
  
  handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('An error occurred:', error.error.message);
      } else {
        console.error(
          `Error code ${error.status}:\n${error.message}\nBody: ${JSON.stringify(error.error)}`);
      }
      return throwError(
        'Services encountered an HTTP error. Please try again later.'
        );
    }

    paginationBuilder(limit?: number, offset?: number): string {
      if (limit && offset) {
          return `?limit=${limit}&offset=${offset}`;
      }

      if (limit) {
          return `?limit=${limit}`;
      }

      if (offset) {
          return `?offset=${offset}`;
      }

      return "";
  }
}