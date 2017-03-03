import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { ShippingMethodComponent } from './shipping-method/shipping-method.component';
import { StartComponent } from './start/start.component';

export const checkoutRoutes: Routes = [
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'start' },
      { path: 'start', component: StartComponent },
      { path: 'billing-address', component: BillingAddressComponent },
      { path: 'order-review', component: OrderReviewComponent },
      { path: 'payment-method', component: PaymentMethodComponent },
      { path: 'shipping-address', component: ShippingAddressComponent },
      { path: 'shipping-method', component: ShippingMethodComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(checkoutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
