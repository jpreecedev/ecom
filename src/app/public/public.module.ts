import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FiltersModule } from '../filters/filters.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HostComponent } from './host/host.component';

import { publicRoutes } from './public.router';

@NgModule({
  imports: [
    CommonModule,
    FiltersModule,
    SharedModule,
    RouterModule,
    publicRoutes
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ListerComponent,
    ProductComponent,
    CheckoutComponent,
    HostComponent
  ]
})
export class PublicModule { }
