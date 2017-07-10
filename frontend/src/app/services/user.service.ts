import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {User} from "../models/user";

@Injectable()
export class UserService {

  users: User[];

  constructor (private http: Http) {}

  getUsers() {
  }

  getUserById(id: string) {
  }

  getUserByName(username: string) {
    let tokenUrl = "http://localhost:8080/rest/user/userName";
    let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.http.post(tokenUrl, username, {headers: headers});
  }

}
