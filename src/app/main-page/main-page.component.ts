import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Post {
  name: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
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
    // {
    //   name: 'Black Heart',
    //   image: './../../assets/img/heart-black.png',
    //   likes: 9
    // },
    // {
    //   name: 'Black Heart',
    //   image: './../../assets/img/heart-red.png',
    //   likes: 7
    // },
    {
      name: 'Orange',
      image: './../../assets/img/orange.jpg',
      likes: 100,
      isLiked: false
    }
  ];

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
