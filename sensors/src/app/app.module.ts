import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
