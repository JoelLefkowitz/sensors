import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PlotRoutingModule } from "./plot-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TimeSeriesComponent } from './time-series/time-series.component';

@NgModule({
    declarations: [TimeSeriesComponent],
    imports: [CommonModule, PlotRoutingModule, SharedModule],
})
export class PlotModule {}
