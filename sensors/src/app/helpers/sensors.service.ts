import { ComponentFactoryResolver, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, combineLatest, of } from "rxjs";
import {
    Paginated,
    PaginatorConfig,
    defaultPaginatorConfig,
} from "src/api/paginator.model";
import {SensorDataPayload, paginatedXidToId} from "src/api/payloads";
import {
    catchError,
    debounceTime,
    map,
    switchMap,
    tap
} from "rxjs/operators";

import { RestService } from "./rest.service";
import {SensorData} from "src/api/sensor-data.model";
import { environment } from "src/environments/environment";
import {
    mockSensorData,
} from "src/api/mocks";

@Injectable({
    providedIn: "root",
})
export class SensorsService {
    backend = environment.apiHost.concat("api/sensors/");

    constructor(
        private http: HttpClient,
        private restService: RestService
    ) {}

    list(
        limit?: number,
        offset?: number
    ): Observable<Paginated<SensorData>> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
            }),
            params: new HttpParams()
            .set('sortBy', 'reading_ts')
            .set('sensor_type', 'O3')
          };
        
        return this.http
            .get<Paginated<SensorDataPayload>>(
                this.backend.concat(
                    this.restService.paginationBuilder(
                        limit,
                        offset
                    )
                ),
                httpOptions
            )
            .pipe(
                map(paginatedXidToId),
                catchError(this.restService.handleError
            ));
    }

    create(payload: SensorDataPayload): Observable<SensorDataPayload> {
        return this.http.post<SensorDataPayload>(
            this.backend,
            payload,
            this.restService.defaultHeaders
        )
        .pipe(catchError(this.restService.handleError));
    }

    mockList(
        count: number = 100
    ): Observable<Paginated<SensorData>> {
        return of({
            count,
            next: 1,
            previous: 0,
            results: [
                ...Array.from(Array(count).keys()).map(
                    (_) => mockSensorData
                ),
            ].sort((_) => 0.5 - Math.random()),
        });
    }
}
