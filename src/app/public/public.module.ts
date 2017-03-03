import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FiltersModule } from '../filters/filters.module';
import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FiltersModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ListerComponent,
    ProductComponent,
    CheckoutComponent,
    PublicComponent
  ]
})
export class PublicModule { }