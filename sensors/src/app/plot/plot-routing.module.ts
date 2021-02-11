import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { TimeSeriesComponent } from "./time-series/time-series.component";

const routes: Routes = [
    { path: "", component: TimeSeriesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlotRoutingModule {}
