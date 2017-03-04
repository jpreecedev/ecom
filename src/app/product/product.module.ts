import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { InfoComponent } from './info/info.component';
import { OverviewComponent } from './overview/overview.component';
import { RatingsComponent } from './ratings/ratings.component';
import { ReturnsComponent } from './returns/returns.component';
import { ShippingComponent } from './shipping/shipping.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    InfoComponent,
    OverviewComponent,
    ReturnsComponent,
    RatingsComponent,
    ShippingComponent
  ],
  exports: [
    InfoComponent,
    OverviewComponent,
    ReturnsComponent,
    RatingsComponent,
    ShippingComponent
  ]
})
export class ProductModule { }
