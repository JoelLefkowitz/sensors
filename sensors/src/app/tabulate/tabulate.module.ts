import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { TableComponent } from "./table/table.component";

@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule, SharedModule],
    exports: [TableComponent],
})
export class TabulateModule {}
