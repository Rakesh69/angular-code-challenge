import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { DashboardFilterPipe } from './dashboard-filter.pipe';

@NgModule({
  declarations: [DashboardComponent,DashboardFilterPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    FormsModule,
    DataTableModule,
  ]
})
export class DashboardModule { }
