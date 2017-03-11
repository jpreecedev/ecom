import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { ProductOverview } from '../../app.interfaces';
import { ListerService } from './lister.service';

@Injectable()
export class ListerResolver implements Resolve<ProductOverview[]> {

  constructor(private service: ListerService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductOverview[]> {
    let category: String = route.params.category;
    let subCategory: String = route.params.subCategory;

    return this.service.getPageData(category, subCategory);
  }

}
