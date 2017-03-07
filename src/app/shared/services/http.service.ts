import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestMethod, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from './jwt-helper.service';
import { IJwt } from './jwt.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { AppSettings } from '../../app.settings';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get(url: string): Observable<Response> {
    return this._request({ url: url, method: RequestMethod.Get, headers: this.getRequestHeaders(false) });
  }

  post(url: string, body: string): Observable<Response> {
    return this._request({ url: url, body: body, method: RequestMethod.Post, headers: this.getRequestHeaders(false) });
  }

  put(url: string, body: string): Observable<Response> {
    return this._request({ url: url, body: body, method: RequestMethod.Put, headers: this.getRequestHeaders(false) });
  }

  delete(url: string, body: string): Observable<Response> {
    return this._request({ url: url, body: body, method: RequestMethod.Delete, headers: this.getRequestHeaders(false) });
  }

  getRequestHeaders(isAuthenticating: boolean): Headers {
    let headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  handleError<T>(error: Response): Observable<T> {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

  private _request(options: RequestOptionsArgs): Observable<Response> {
    return this.http.request(options.url, options);
  }
}
