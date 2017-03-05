import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorsComponent } from './errors.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const productRoutes: Routes = [
    {
        path: '',
        component: ErrorsComponent,
        children: [
            {
                path: '**',
                component: NotFoundComponent,
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
export class ErrorsRoutingModule { }
