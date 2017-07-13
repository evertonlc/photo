import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../../services/photo.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Photo} from "../../models/photo";

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.css']
})
export class MyAlbumComponent implements OnInit {

  photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor(private userService: UserService,
              private photoService: PhotoService,
              private router: Router) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        console.log(this.user);
        this.photoService.getPhotosByUser(this.user).subscribe(
          photos => {console.log(this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);

  }

}
