import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SensorData, SensorDataType, sensorDataTypes } from "src/api/sensor-data.model";

import { Router } from "@angular/router";
import { SensorDataPayload } from "../../../api/payloads";
import { SensorsService } from "src/app/helpers/sensors.service";
import { requiredNumeric } from "src/api/validators";

@Component({
    selector: "app-stepper",
    templateUrl: "./stepper.component.html",
    styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {

    sensorDataTypes: SensorDataType[] = sensorDataTypes
    
    sensorData = new FormGroup({
        box_id: new FormControl("", Validators.required),
        sensorDataType: new FormControl(Validators.required),
        coordinates: new FormGroup({
            longitude: new FormControl(0, requiredNumeric),
            latitude: new FormControl(0, requiredNumeric),
        }),
        reading: new FormControl(0, requiredNumeric)
    });
    
    constructor(private sensorsService: SensorsService, private router: Router) {}

    ngOnInit(): void {}
    
    onSubmit(): void {
        const formInput = this.sensorData.value
        let outputData = formInput.sensorDataType
        
        Object.assign(outputData, {
            box_id: formInput.box_id,
            xid: formInput.box_id.concat("-", formInput.sensorDataType.sensor_type),
            longitude: formInput.coordinates.longitude,
            latitude: formInput.coordinates.latitude,
            reading: formInput.reading,
            reading_ts: new Date().toISOString().split(".")[0]
        }    
      )   
      
      this.sensorsService.create(outputData).subscribe(
          (sensorData: SensorDataPayload) => this.router.navigateByUrl("/")
      );
    }
}


