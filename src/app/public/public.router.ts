import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListerComponent } from './lister/lister.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'shop', outlet: 'public' },
    { path: 'shop', component: HomeComponent, outlet: 'public' },
    { path: 'contact', component: ContactComponent, outlet: 'public' },
    { path: 'login', component: LoginComponent, outlet: 'public' },
    { path: 'register', component: RegisterComponent, outlet: 'public' },
    { path: 'lister', component: ListerComponent, outlet: 'public' },
    { path: 'product', component: ProductComponent, outlet: 'public' },
    { path: 'checkout', component: CheckoutComponent, outlet: 'public' }
];

export const publicRoutes: ModuleWithProviders = RouterModule.forChild(routes);
