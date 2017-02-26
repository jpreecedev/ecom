import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { SharedModule } from './shared/shared.module';
import { FiltersModule } from './filters/filters.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ListerComponent,
    ProductComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FiltersModule,
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
