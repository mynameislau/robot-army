import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { AboutComponent } from './components/about.component';
import { RobotPageComponent } from './components/robot-page.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'robots/:id',
    component: RobotPageComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
