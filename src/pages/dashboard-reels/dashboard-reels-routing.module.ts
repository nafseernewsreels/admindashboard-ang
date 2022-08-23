import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardReelsComponent } from './dashboard-reels.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardReelsComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardReelsRoutingModule { }
