import { Component } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:Post[]=[];
  postService = new PostService();

  constructor() {
    this.postService= new PostService();
    this.posts=this.postService.getPost();
  }

  getPost(){
    this.postService= new PostService();
    return this.posts=this.postService.getPost();
  }

}
