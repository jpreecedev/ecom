import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { publicRoutes } from './public/public.router';
import { adminRoutes } from './admin/admin.router';

import { HostComponent as PublicHostComponent } from './public/host/host.component';
import { HostComponent as AdminHostComponent } from './admin/host/host.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: 'admin',
    component: AdminHostComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, outlet: 'admin' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
