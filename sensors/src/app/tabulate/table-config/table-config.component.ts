import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SensorDataType, sensorDataTypes } from 'src/api/sensor-data.model';

import { Subscription } from 'rxjs';

export interface TableConfig {
  sortBy: string | null;
  filterBy: string | null;
}

@Component({
  selector: 'app-table-config',
  templateUrl: './table-config.component.html',
  styleUrls: ['./table-config.component.scss']
})
export class TableConfigComponent implements OnInit {

  tableConfig = new FormGroup({
      sortBy: new FormControl(""),
      filterBy: new FormControl(""),
    })

  sortOptions = [
    {name: "Reading", value: "reading"},
    {name: "Timestamp", value: "reading_ts"},
  ]
  
  filterOptions = sensorDataTypes.map(
    (dataType: SensorDataType) => ({name: dataType.name, value: dataType.sensor_type})
  )

  @Output() tableConfigUpdate = new EventEmitter<TableConfig>();
  
  formSubscription : Subscription;

  ngOnInit(): void {
    this.tableConfig.setValue({
      sortBy: null,
      filterBy: null,
    });
    
    this.formSubscription = this.tableConfig.valueChanges.subscribe(
      (value: TableConfig) => {
      this.tableConfigUpdate.emit(value);
    });
}

ngOnDestroy(): void {
  if(this.formSubscription) {
      this.formSubscription.unsubscribe()
    }
  }
}
