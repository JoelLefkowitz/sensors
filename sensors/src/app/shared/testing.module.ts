import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "./material.module";
import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

const allDependencies = [
    HttpClientTestingModule,
    RouterTestingModule,
    NoopAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
];

@NgModule({
    declarations: [],
    providers: [],
    imports: [].concat(allDependencies),
    exports: [].concat(allDependencies),
})
export class TestingModule {}
