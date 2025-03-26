import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Post {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [CommonModule],
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
      isLiked: false
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
