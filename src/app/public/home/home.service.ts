import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared/services/http.service';
import { AppSettings } from '../../app.settings';
import { ProductDetail } from '../../app.interfaces';

@Injectable()
export class HomeService {

  constructor(public httpService: HttpService) { }

  getPageData(id: Number, description: String): Observable<ProductDetail> {
    return this.httpService.get(`${AppSettings.API_ENDPOINT}/home/`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
