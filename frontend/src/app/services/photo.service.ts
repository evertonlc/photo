import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Photo} from '../models/photo';
import {Http} from '@angular/http';
import {User} from "../models/user";

@Injectable()
export class PhotoService {

  constructor(private http: Http) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get('http://localhost:8080/photo/allPhotos').map(data => {
      return <Photo[]>JSON.parse(JSON.parse(JSON.stringify(data))._body);
    });
  }

  getPhotosByUser(user: User): Observable<Photo[]> {
    return null;

  }

}
