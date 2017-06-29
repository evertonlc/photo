import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {

  constructor(private http: Http) {
  }

  sendUser(user: User): Observable<any> {
    const url = 'http://localhost:8080/user/register';
    const headers = new Headers({'Content-type': 'application/json'});
    return this.http.post(url, JSON.stringify(user), {headers: headers})
  }

}
