import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Paginated, PaginatorConfig, defaultPaginatorConfig } from 'src/api/paginator.model';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { SensorData } from 'src/api/sensor-data.model';
import { SensorsService } from 'src/app/helpers/sensors.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {  
  
  displayedColumns = [
    "id",
    "name",
    "range",
    "coordinates",
    "reading",
    "timestamp",
  ];
  
  sensorData: Observable<Paginated<SensorData>>;

  private paginatorConfig = new BehaviorSubject<PaginatorConfig>(defaultPaginatorConfig);

  constructor(private sensorsService: SensorsService) { }
  
  ngOnInit(): void {
    this.sensorData = this.paginatorConfig
    .pipe(
      debounceTime(50),
      switchMap(
        (paginatorConfig) => {
          const limit = paginatorConfig ? paginatorConfig.pageSize : null;
          const offset = paginatorConfig ? limit * paginatorConfig.pageIndex : null;
          return this.sensorsService.mockSensorData(limit)
        }
      )
    )
  }

  paginatorConfigUpdate(paginatorConfig: PaginatorConfig) {
    this.paginatorConfig.next(paginatorConfig)
  }
}
