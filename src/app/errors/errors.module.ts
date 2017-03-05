import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorsComponent } from './errors.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ErrorsRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    ErrorsComponent
  ],
  exports: [
    NotFoundComponent,
    ErrorsComponent
  ]
})
export class ErrorsModule { }
