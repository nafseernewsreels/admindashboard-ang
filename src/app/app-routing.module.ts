import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'source',
    loadChildren: () => import('../pages/source/source.module').then( m => m.SourceModule)
  },
  {
    path: 'dashboard-reels',
    loadChildren: () => import('../pages/dashboard-reels/dashboard-reels.module').then( m => m.DashboardReelsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

