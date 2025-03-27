import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  // @Input() myPosts: string[] = [];
  // @Input() message: string = '';

  @Input() singlePost: Post = {
      name: 'user error',
      image: 'error img.png',
      likes: 0,
      isLiked: false,
      comment: []
  }

  @Output() userComment = new EventEmitter<string>();
  comment: string = '';

  addUserComment() {
    this.userComment.emit(this.comment);
    this.comment = '';//to keep clean input field
  }


  toggelLike(singlePost: Post) {
    console.log(this.singlePost);
    
    if (this.singlePost.isLiked) {
      this.singlePost.isLiked = false;
      this.singlePost.likes--;
    } else {
      this.singlePost.isLiked = true;
      this.singlePost.likes++;
    }
  }
  
  
}
