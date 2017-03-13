import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared/services/http.service';
import { ProductDetail } from '../../app.interfaces';

@Injectable()
export class DetailService {

  constructor(public httpService: HttpService) { }

  getPageData(id: Number, description: String): Observable<ProductDetail> {
    return this.httpService.get(`/product/${id}/${description}/`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
