import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { EcomLoginRoutingModule } from './ecom-login-routing.module';
import { EcomLoginComponent } from './ecom-login.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EcomLoginRoutingModule
  ],
  declarations: [
    EcomLoginComponent,
    LoginComponent
  ]
})
export class EcomLoginModule { }
