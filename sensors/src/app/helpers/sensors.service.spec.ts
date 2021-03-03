import { TestingModule } from "../shared/testing.module";
import { SensorsService } from "./sensors.service";
import { TestBed } from "@angular/core/testing";

describe("SensorsService", () => {
  let service: SensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule],
    });

    service = TestBed.inject(SensorsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
