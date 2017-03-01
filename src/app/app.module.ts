import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';

import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
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
    FormsModule,
    HttpModule,
    routing
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
