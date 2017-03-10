import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { ProductDetail } from '../../app.interfaces';
import { HomeService } from './home.service';

@Injectable()
export class HomeResolver implements Resolve<ProductDetail> {

  constructor(private homeService: HomeService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetail> {
    let id: Number = route.params.id;
    let description: String = route.params.description;

    return this.homeService.getPageData(id, description);
  }

}
