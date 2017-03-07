import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared/services/http.service';
import { AppSettings } from '../../app.settings';

export class ProductDetail {

}

@Injectable()
export class DetailService {

  constructor(public httpService: HttpService) { }

  getProductDetail(id: Number, description: String): Observable<Response> {
    return this.httpService.get(`${AppSettings.API_ENDPOINT}/product/${id}/${description}/`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
