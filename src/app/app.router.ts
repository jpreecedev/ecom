import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
