import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SinglePostComponent } from './single-post/single-post.component';

interface Post {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, SinglePostComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  posts: Post[] = [
    {
      name: 'Banana',
      image: './../../assets/img/banana.jpg',
      likes: 50,
      isLiked: false
    },
    {
      name: 'Currant',
      image: './../../assets/img/currant.jpg',
      likes: 5,
      isLiked: true
    },
  
    {
      name: 'Orange',
      image: './../../assets/img/orange.jpg',
      likes: 100,
      isLiked: false
    }
  ];
  // messageFromParent: string = 'Hello from Parent';

  toggelLike(index: number) {
    if (this.posts[index].isLiked) {
      this.posts[index].isLiked = false;
      this.posts[index].likes--;
    } else {
      this.posts[index].isLiked = true;
      this.posts[index].likes++;
    }
  }
}
