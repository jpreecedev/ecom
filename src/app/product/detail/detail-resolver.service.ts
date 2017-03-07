import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

import { ProductDetail, DetailService } from './detail.service';


@Injectable()
export class DetailResolver implements Resolve<ProductDetail> {

  constructor(private detailService: DetailService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductDetail> {
    let id: Number = route.params.id;
    let description: String = route.params.description;

    return this.detailService.getProductDetail(id, description);
  }

}
