import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.modal';


@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private urlPosts = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private httpPost: HttpClient) { }

  getUserPosts(id:string): Observable<Post[]> {
    return this.httpPost.get<Post[]>(this.urlPosts + "?userId=" + id);
  }

}
