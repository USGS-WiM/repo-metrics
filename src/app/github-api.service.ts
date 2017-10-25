import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { APP_SETTINGS } from './app.settings';

@Injectable()
export class GithubApiService {

  constructor(private _http: Http) { }

  // get all wim repos

  getRepos(): Observable<any> {

    //let options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

    return this._http.get(APP_SETTINGS.ORG_REPOS_URL)
    .map((response: Response) => <any>response.json())
    // .do(data => console.log('Sample types data: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().name[0] || 'Server error');
}

}
