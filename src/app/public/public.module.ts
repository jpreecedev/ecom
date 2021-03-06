import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ListerComponent } from './lister/lister.component';

import { PublicRoutingModule } from './public-routing.module';
import { BasketComponent } from './basket/basket.component';

import { HomeService } from './home/home.service';
import { HomeResolver } from './home/home-resolver.service';
import { ListerResolver } from './lister/lister-resolver.service';
import { ListerService } from './lister/lister.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductModule,
    RouterModule,
    FormsModule,
    PublicRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    ListerComponent,
    PublicComponent,
    BasketComponent
  ],
  providers: [
    HomeService,
    HomeResolver,
    ListerResolver,
    ListerService
  ]
})
export class PublicModule { }
