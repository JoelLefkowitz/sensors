import { BehaviorSubject, Observable, combineLatest } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import {
    Paginated,
    PaginatorConfig,
    defaultPaginatorConfig,
} from "src/api/paginator.model";
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap,
} from "rxjs/operators";

import { SensorData } from "src/api/sensor-data.model";
import { SensorsService } from "src/app/helpers/sensors.service";
import { TableConfig } from "../table-config/table-config.component";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
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

    private paginatorConfig = new BehaviorSubject<PaginatorConfig>(
        defaultPaginatorConfig
    );

    @Input() tableConfig: Observable<TableConfig>

    constructor(private sensorsService: SensorsService) {}

    ngOnInit(): void {
        this.sensorData = combineLatest([this.paginatorConfig, this.tableConfig])
        .pipe(
            debounceTime(50),
            switchMap(
                ([paginatorConfig, tableConfig]) => {
                const limit = paginatorConfig
                    ? paginatorConfig.pageSize
                    : null;
                const offset = paginatorConfig
                    ? limit * paginatorConfig.pageIndex
                    : null;
                return this.sensorsService.list(limit, offset, tableConfig);
            })
        );
    }

    paginatorConfigUpdate(paginatorConfig: PaginatorConfig) {
        this.paginatorConfig.next(paginatorConfig);
    }
}
