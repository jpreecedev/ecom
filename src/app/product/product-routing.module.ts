import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailResolver } from './detail/detail-resolver.service';
import { ProductComponent } from './product.component';
import { DetailComponent } from './detail/detail.component';

export const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: ':id/:description',
        component: DetailComponent,
        resolve: {
          productDetail: DetailResolver
        }
      },
      {
        path: '',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
