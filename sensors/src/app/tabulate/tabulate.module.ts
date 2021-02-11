import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { TableComponent } from "./table/table.component";
import { TableConfigComponent } from './table-config/table-config.component';

@NgModule({
    declarations: [TableComponent, TableConfigComponent],
    imports: [CommonModule, SharedModule, ReactiveFormsModule],
    exports: [TableComponent, TableConfigComponent],
})
export class TabulateModule {}
