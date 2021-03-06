import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { TodoComponent } from './todo/todo.component';
import { RecentPurchasesComponent } from './recent-purchases/recent-purchases.component';

import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  declarations: [
    DashboardComponent,
    AdminComponent,
    TodoComponent,
    RecentPurchasesComponent,
    OverviewComponent
  ]
})
export class AdminModule { }
