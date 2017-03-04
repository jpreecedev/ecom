import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AccountComponent } from './account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AccountRoutingModule } from './account-routing.module';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    ChangePasswordComponent,
    LoginComponent,
    RegisterComponent,
    OrderHistoryComponent,
    ResetPasswordComponent
  ]
})
export class AccountModule { }
