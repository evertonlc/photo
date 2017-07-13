import {Component, OnInit} from '@angular/core';
import {UploadPhotoService} from "../../services/upload-photo.service";
import {AddPhotoService} from "../../services/add-photo.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent {

  newPhoto = new Photo();
  photoAdded = false;
  user: User;

  uploadPhotoService: UploadPhotoService;

  constructor(uploadPhotoService: UploadPhotoService,
              private addPhotoService: AddPhotoService,
              private userService: UserService) {
    this.uploadPhotoService = uploadPhotoService;
  }

  onSubmit() {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user=> {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log();
        this.newPhoto.user = this.user;
        this.addPhotoService.sendPhoto(this.newPhoto)
          .subscribe(
            data => {
              this.photoAdded = true;
              this.newPhoto = new Photo();
            },
            error => console.log(error));
      },
      error => console.log(error));
  }

}
