import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { effects, store, instrumentation } from './store';

import { AdminModule } from './admin/admin.module';
import { EcomLoginModule } from './ecom-login/ecom-login.module';
import { PublicModule } from './public/public.module';
import { AccountModule } from './account/account.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SharedModule } from './shared/shared.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    EcomLoginModule,
    PublicModule,
    AccountModule,
    CheckoutModule,
    ErrorsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    effects,
    store,
    instrumentation
  ],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
