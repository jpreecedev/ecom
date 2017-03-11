import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared/services/http.service';
import { AppSettings } from '../../app.settings';
import { ProductOverview } from '../../app.interfaces';

@Injectable()
export class ListerService {

  constructor(public httpService: HttpService) { }

  getPageData(category: String, subCategory: String): Observable<ProductOverview[]> {
    return this.httpService.get(`/lister/${category}/${subCategory}/`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
