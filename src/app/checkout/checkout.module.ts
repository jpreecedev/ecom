import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CheckoutComponent } from './checkout.component';
import { StartComponent } from './start/start.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { OrderReviewComponent } from './order-review/order-review.component';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent,
    StartComponent,
    BillingAddressComponent,
    ShippingAddressComponent,
    ShippingMethodComponent,
    OrderReviewComponent,
    CustomerComponent
  ],
  exports: [
    CheckoutComponent,
    StartComponent,
    BillingAddressComponent,
    ShippingAddressComponent,
    ShippingMethodComponent,
    OrderReviewComponent
  ]
})
export class CheckoutModule { }
