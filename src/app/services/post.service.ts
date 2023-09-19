import {Injectable} from '@angular/core';
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  posts: Post[] = [];

  getPost(): Post[] {

    this.posts = [
      new Post(1, 'Iphone 15', ' with prosessor A17', 'Muhammed Yasser', 'Zagazig'),
      new Post(2, 'Iphone 14', ' with prosessor A16', 'Muhammed Salah', 'Cairo'),
      new Post(3, 'Iphone 13', ' with prosessor A15', 'Muhammed Khalid', 'Alex'),
      new Post(4, 'Iphone 12', ' with prosessor A14', 'Muhammed Ahmed', 'Banha')
    ]
    return this.posts;
  }

  getPostById(id: number) {
    var result = this.posts.filter(obj => {
      return obj.id === id;
    })
    return result;

  }


}
