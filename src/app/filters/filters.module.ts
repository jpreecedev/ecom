import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BrandComponent } from './brand/brand.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BrandComponent,
    CategoriesComponent,
    DiscountsComponent,
    PriceComponent
  ],
  exports: [
    BrandComponent,
    CategoriesComponent,
    DiscountsComponent,
    PriceComponent
  ]
})
export class FiltersModule { }
