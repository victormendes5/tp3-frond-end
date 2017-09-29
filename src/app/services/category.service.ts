import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { AppConstants } from '../resources/app.constants';
import { AppHandler } from '../resources/app.handler';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {}

  endPoint = AppConstants;
  handler = AppHandler;

  getData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return this.http.get(this.endPoint.API_ENDPOINT_CATEGORIES, {
      headers: headers
    }).map(res => res.json())
      .catch(this.handler.handleError)
      .do(res => {
        return res;
      });
  }

  postData(content: Object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return this.http.post(this.endPoint.API_ENDPOINT_CATEGORIES, content, {
      headers: headers
    })
      .map(res => res.json())
      .catch(this.handler.handleError)
      .do(res => {
        return res;
      });
  }

}
