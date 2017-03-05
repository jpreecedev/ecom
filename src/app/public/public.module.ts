import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { effects, store, instrumentation } from './store';

import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListerComponent } from './lister/lister.component';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    RouterModule,
    PublicRoutingModule,
    store,
    effects,
    instrumentation
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    ListerComponent,
    PublicComponent,
    AboutComponent,
    BasketComponent
  ]
})
export class PublicModule { }
