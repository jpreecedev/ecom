import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryProductComponent } from './gallery-product/gallery-product.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { NavComponent } from './nav/nav.component';
import { RatingComponent } from './rating/rating.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SplashComponent } from './splash/splash.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderHistoryItemComponent } from './order-history-item/order-history-item.component';
import { ResetPasswordFormComponent } from './reset-password-form/reset-password-form.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselItemComponent,
    FeaturedComponent,
    FooterComponent,
    GalleryProductComponent,
    HeaderComponent,
    HeaderBottomComponent,
    HeaderTopComponent,
    NavComponent,
    RatingComponent,
    SearchBoxComponent,
    SplashComponent,
    ContactFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RangeSliderComponent,
    NotFoundComponent,
    OrderHistoryItemComponent,
    ResetPasswordFormComponent,
    OrderItemComponent,
    PromotionsComponent,
    CategoriesComponent,
    ProductComponent
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
    GalleryProductComponent,
    HeaderComponent,
    HeaderBottomComponent,
    HeaderTopComponent,
    NavComponent,
    RatingComponent,
    SearchBoxComponent,
    SplashComponent,
    ContactFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RangeSliderComponent,
    NotFoundComponent,
    OrderHistoryItemComponent,
    ResetPasswordFormComponent,
    OrderItemComponent,
    PromotionsComponent,
    CategoriesComponent,
    ProductComponent
  ]
})
export class SharedModule { }
