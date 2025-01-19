import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Post {
  id?: number;
  title: string;
  views: number;
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
