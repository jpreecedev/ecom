import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

export const accountRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login-register' },
      { path: 'login-register', component: LoginRegisterComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'order-history', component: OrderHistoryComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
