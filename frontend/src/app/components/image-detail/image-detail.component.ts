import {Component} from '@angular/core';
import {Photo} from "../../models/photo";

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {

  photo: Photo;
  like: any;

  likeDisplay() {

  }

  goBack() {

  }
}
