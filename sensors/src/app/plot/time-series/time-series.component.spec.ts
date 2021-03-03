import { TestingModule } from "../../shared/testing.module";
import { TimeSeriesComponent } from "./time-series.component";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";

describe("TimeSeriesComponent", () => {
  let component: TimeSeriesComponent;
  let fixture: ComponentFixture<TimeSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
      declarations: [TimeSeriesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
