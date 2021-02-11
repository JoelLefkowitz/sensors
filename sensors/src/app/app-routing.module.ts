import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "home",
        loadChildren: () =>
            import("./home/home.module").then(
                (m) => m.HomeModule
            ),
    },
    {
        path: "create",
        loadChildren: () =>
            import("./create/create.module").then(
                (m) => m.CreateModule
            ),
    },
    {
        path: "plot",
        loadChildren: () =>
            import("./plot/plot.module").then(
                (m) => m.PlotModule
            ),
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
