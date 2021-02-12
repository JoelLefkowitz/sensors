import { SensorsService } from "./sensors.service";
import { TestBed } from "@angular/core/testing";
import { TestingModule } from "../shared/testing.module";

describe("SensorsService", () => {
    let service: SensorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestingModule]
        })
        
        service = TestBed.inject(SensorsService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
