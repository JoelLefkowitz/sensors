import { TableConfigComponent } from "./table-config.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { TestingModule } from "src/app/shared/testing.module";

describe("TableConfigComponent", () => {
  let component: TableConfigComponent;
  let fixture: ComponentFixture<TableConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TableConfigComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
