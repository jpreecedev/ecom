import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HostComponent } from './host/host.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HostComponent
  ],
  declarations: [DashboardComponent, HostComponent]
})
export class AdminModule { }
