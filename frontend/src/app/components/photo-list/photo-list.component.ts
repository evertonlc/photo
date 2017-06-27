import {Component, OnInit} from '@angular/core';
import {PhotoService} from '../../services/photo.service';
import {Photo} from '../../models/photo';

@Component({
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[];
  selectedPhoto: Photo;

  constructor(private photoService: PhotoService) {

  }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(
      data => {
        this.photos = data;
        console.log(this.photos)
      },
      error => console.log(error));
  }

  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
  }

}
