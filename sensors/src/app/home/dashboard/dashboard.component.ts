import { BehaviorSubject, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { TableConfig } from "../../tabulate/table-config/table-config.component";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    tableConfig: Observable<TableConfig>;

    private tableConfigSource = new BehaviorSubject<TableConfig>(
        {
            sortBy: null,
            filterBy: null,
        }
    );

    ngOnInit(): void {
        this.tableConfig = this.tableConfigSource.asObservable();
    }

    tableConfigUpdate(config: TableConfig) {
        this.tableConfigSource.next(config);
    }
}
