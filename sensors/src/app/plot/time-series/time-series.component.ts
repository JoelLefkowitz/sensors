import {
    ApexAxisChartSeries,
    ApexChart,
    ApexDataLabels,
    ApexGrid,
    ApexStroke,
    ApexTitleSubtitle,
    ApexXAxis,
    ChartComponent,
} from "ng-apexcharts";
import {
    BehaviorSubject,
    Observable,
    combineLatest,
    of,
} from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import {
    Paginated,
    PaginatorConfig,
    defaultPaginatorConfig,
} from "src/api/paginator.model";
import {
    SensorData,
    SensorDataType,
    sensorDataTypes,
} from "src/api/sensor-data.model";
import {
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
    tap,
} from "rxjs/operators";

import { FormControl } from "@angular/forms";
import { SensorsService } from "src/app/helpers/sensors.service";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};

@Component({
    selector: "app-time-series",
    templateUrl: "./time-series.component.html",
    styleUrls: ["./time-series.component.scss"],
})
export class TimeSeriesComponent implements OnInit {
    public chartOptions: Observable<Partial<ChartOptions>>;

    metric = new FormControl();

    metricOptions = sensorDataTypes.map(
        (dataType: SensorDataType) => ({
            name: dataType.name,
            value: dataType.sensor_type,
        })
    );

    constructor(private sensorsService: SensorsService) {}

    ngOnInit(): void {
        this.chartOptions = this.metric.valueChanges.pipe(
            switchMap((metric) =>
                this.sensorsService.list(50, 0, {
                    filterBy: 'O3',
                    sortBy: null,
                })
            ),
            map((paginatedData) => ({
                series: [
                    {
                        name: "Desktops",
                        data: paginatedData.results.map(
                            (i) => i.reading
                        ),
                    },
                ],
                chart: {
                    height: 700,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                title: {
                    text: "Product Trends by Month",
                    align: "left",
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: paginatedData.results.map(
                        (i) => i.reading_ts
                    ),
                },
            } as Partial<ChartOptions>))
        );
    }
}
