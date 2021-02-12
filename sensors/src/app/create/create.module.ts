import { CommonModule } from "@angular/common";
import { CreateRoutingModule } from "./create-routing.module";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { StepperComponent } from "./stepper/stepper.component";

@NgModule({
    declarations: [StepperComponent],
    imports: [
        CommonModule,
        CreateRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class CreateModule {}
