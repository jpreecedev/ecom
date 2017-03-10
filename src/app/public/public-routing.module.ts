import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListerComponent } from './lister/lister.component';
import { BasketComponent } from './basket/basket.component';

import { HomeResolver } from './home/home-resolver.service';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    resolve: {
      products: HomeResolver
    },
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'l', component: ListerComponent },
      { path: 'basket', component: BasketComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
