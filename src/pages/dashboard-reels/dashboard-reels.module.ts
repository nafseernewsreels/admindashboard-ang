import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardReelsRoutingModule } from './dashboard-reels-routing.module';
import { DashboardReelsComponent } from '../dashboard-reels/dashboard-reels.component';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  declarations: [
    DashboardReelsComponent
  ],
  imports: [
    CommonModule,
    DashboardReelsRoutingModule,
    MatTableModule
  ]
})
export class DashboardReelsModule { }
