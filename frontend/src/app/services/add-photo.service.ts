import {Injectable} from '@angular/core';
import {Photo} from "../models/photo";
import {Headers, Http} from "@angular/http";

@Injectable()
export class AddPhotoService {

  constructor(private http: Http) { }

  sendPhoto(photo:Photo) {
    let url = "http://localhost:8080/rest/photo/add";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
    console.log(url);
    return this.http.post(url, JSON.stringify(photo), {headers: headers});
  }
}
