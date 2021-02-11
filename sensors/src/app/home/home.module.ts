import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TabulateModule } from '../tabulate/tabulate.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TabulateModule
  ]
})
export class HomeModule { }
