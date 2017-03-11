import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HttpService } from './services/http.service';
import { JwtHelper } from './services/jwt-helper.service';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { NavComponent } from './nav/nav.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { OrderHistoryItemComponent } from './order-history-item/order-history-item.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { FilterPriceComponent } from './filter-price/filter-price.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { EmptyBasketComponent } from './empty-basket/empty-basket.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    FeaturedComponent,
    FooterComponent,
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    SearchBoxComponent,
    ContactFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RangeSliderComponent,
    OrderHistoryItemComponent,
    ResetPasswordFormComponent,
    PromotionsComponent,
    CategoriesComponent,
    SingleProductComponent,
    FilterCategoryComponent,
    FilterPriceComponent,
    SocialIconsComponent,
    EmptyBasketComponent
  ],
  providers: [
    HttpService,
    JwtHelper
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [
    CarouselComponent,
    CarouselItemComponent,
    FeaturedComponent,
    FooterComponent,
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    SearchBoxComponent,
    ContactFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RangeSliderComponent,
    OrderHistoryItemComponent,
    ResetPasswordFormComponent,
    PromotionsComponent,
    CategoriesComponent,
    SingleProductComponent,
    FilterCategoryComponent,
    FilterPriceComponent,
    SocialIconsComponent,
    EmptyBasketComponent
  ]
})
export class SharedModule { }
