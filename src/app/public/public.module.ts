import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './about/about.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    ListerComponent,
    ProductComponent,
    PublicComponent,
    AboutComponent,
    BasketComponent
  ]
})
export class PublicModule { }
