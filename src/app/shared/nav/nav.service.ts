import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../shared/services/http.service';
import { MegaMenu } from '../../app.interfaces';

@Injectable()
export class NavService {

  constructor(public httpService: HttpService) { }

  getMegaMenu(): Observable<MegaMenu> {
    return this.httpService.get(`/megamenu/`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
