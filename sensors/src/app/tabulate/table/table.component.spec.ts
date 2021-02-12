import {
    ComponentFixture,
    TestBed,
    async,
} from "@angular/core/testing";

import { TableComponent } from "./table.component";
import { TestingModule } from "../../shared/testing.module";

describe("TableComponent", () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule],
            declarations: [TableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
