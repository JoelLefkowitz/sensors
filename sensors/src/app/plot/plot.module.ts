import { CommonModule } from "@angular/common";
import { NgApexchartsModule } from "ng-apexcharts";
import { NgModule } from "@angular/core";
import { PlotRoutingModule } from "./plot-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { TimeSeriesComponent } from "./time-series/time-series.component";

@NgModule({
    declarations: [TimeSeriesComponent],
    imports: [
        CommonModule,
        PlotRoutingModule,
        SharedModule,
        NgApexchartsModule, 
        ReactiveFormsModule
    ],
})
export class PlotModule {}
