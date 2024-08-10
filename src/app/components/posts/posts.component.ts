import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../api/posts.service';

interface PostCard {
  id: number;
  image: string;
  href: string;
  name: string;
  author: string;
  publishMonth: string;
  publishYear: number;
  summary: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  providers: [PostsService]
})
export class PostsComponent implements OnInit{
  @Input() cardData: PostCard = { 
    id: 0,
    image: '',
    href: '', 
    name: '', 
    author: '',
    publishMonth: '',
    publishYear: 0,
    summary: '',
  };

  postsCards: PostCard[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPostsData().subscribe((data) => {
      //console.log("Data del JSON: ", data);
      this.postsCards = data;
    }, (error) => {
      console.error('Error fetching explore data', error);
    });
  }

}
