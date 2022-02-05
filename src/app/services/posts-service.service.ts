import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Post } from '../models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PostsServiceService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.baseUrl + "/posts");
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.baseUrl + "/posts", post);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(environment.baseUrl + `/posts/${post.id}`, post);
  }

  deletePost(post: Post): Observable<any> {
    return this.http.delete(environment.baseUrl + `/posts/${post.id}`);
  }

}
