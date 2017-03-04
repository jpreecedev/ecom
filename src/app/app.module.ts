import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { AccountModule } from './account/account.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SharedModule } from './shared/shared.module';
import { FiltersModule } from './filters/filters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FiltersModule,
    AdminModule,
    PublicModule,
    AccountModule,
    CheckoutModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
