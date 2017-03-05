import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../services/http.service';
import { AppSettings } from '../../app.settings';

@Injectable()
export class CategoriesService {

  constructor(public httpService: HttpService) {

  }

  getCategories(): Observable<Response> {
    return this.httpService.get(`${AppSettings.API_ENDPOINT}/categories/`);
  }

}
