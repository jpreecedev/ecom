import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'lister', component: ListerComponent },
      { path: 'product', component: ProductComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
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
