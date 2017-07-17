import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Photo} from '../models/photo';
import {Headers, Http} from '@angular/http';
import {User} from "../models/user";

@Injectable()
export class PhotoService {

  private publicUrl = 'http://localhost:8080/photo';
  private tokenUrl = 'http://localhost:8080/rest/photo';
  private headers = new Headers({'Content-type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`});

  constructor(private http: Http) {
  }

  getPhotos(): Observable<Photo[]> {
    return this.http.get(`${this.publicUrl}/all`).map(data => {
      return <Photo[]>JSON.parse(JSON.parse(JSON.stringify(data))._body);
    });
  }

  getPhotoById(photoId: number) {
    let url = `${this.tokenUrl}/photoId`;
    return this.http.post(url, JSON.stringify(photoId), {headers: this.headers})
  }

  getPhotosByUser(user: User) {
    let url = `${this.tokenUrl}/user`;
    return this.http.post(url, JSON.stringify(user), {headers: this.headers})
  }

  updatePhoto(photo: Photo) {
    let url = `${this.tokenUrl}/update`;
    return this.http.post(url, JSON.stringify(photo), {headers: this.headers})
  }

}
