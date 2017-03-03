import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CheckoutComponent } from './checkout.component';
import { StartComponent } from './start/start.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderReviewComponent } from './order-review/order-review.component';

import { CheckoutRoutingModule } from './checkout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ],
  declarations: [
    CheckoutComponent,
    StartComponent,
    BillingAddressComponent,
    ShippingAddressComponent,
    ShippingMethodComponent,
    PaymentMethodComponent,
    OrderReviewComponent
  ],
  exports: [
    CheckoutComponent,
    StartComponent,
    BillingAddressComponent,
    ShippingAddressComponent,
    ShippingMethodComponent,
    PaymentMethodComponent,
    OrderReviewComponent
  ]
})
export class CheckoutModule { }
