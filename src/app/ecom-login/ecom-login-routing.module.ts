import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EcomLoginComponent } from './ecom-login.component';
import { LoginComponent } from './login/login.component';

export const adminLoginRoutes: Routes = [
  {
    path: 'ecom-admin',
    component: EcomLoginComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminLoginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EcomLoginRoutingModule { }
