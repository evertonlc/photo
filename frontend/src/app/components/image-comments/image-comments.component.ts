import {Component, Input} from '@angular/core';
import {Photo} from "../../models/photo";
import {User} from "../../models/user";
import {Comment} from "../../models/comment";
import {UserService} from "../../services/user.service";
import {CommentService} from "../../services/comment.service";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'image-comments',
  templateUrl: './image-comments.component.html',
  styleUrls: ['./image-comments.component.css']
})
export class ImageCommentsComponent {

  @Input('photo') photo: Photo;
  myLocalStorage = localStorage;
  user: User=new User();
  newComment = new Comment();

  constructor (private userService: UserService, private commentService: CommentService, private photoService: PhotoService) {
    console.log(this.photo);
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
      },
      error => console.log(error)
    )
  }

  onSubmit() {
    console.log(this.photo);
    console.log(this.photo.commentList);
    this.newComment.photo = this.photo;
    this.newComment.userName = this.user.userName;
    this.newComment.photoId = this.photo.photoId;
    this.commentService.addComment(this.newComment).subscribe(
      photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
        photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
        error => console.log(error)
      )
      // error => console.log(error)
    );
    // this.photo.commentList.push(this.newComment);
    this.newComment = new Comment();
  }

}
