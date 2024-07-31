import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../interfaces/dashboard';
import { base_url, endpoints } from '../../core/util/endpoints';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
 posts:BehaviorSubject<any> = new BehaviorSubject([])
 currentPost = this.posts.asObservable();


  base_url = base_url;

  constructor(private http: HttpClient) {}

  getAllPost(): void {
     this.http.get<Post[]>(`${this.base_url}${endpoints.POSTS.posts}`).subscribe(res=>{
      this.posts.next(res)
     });
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(
      `${this.base_url}${endpoints.POSTS.posts}`,
      post
    );
  }

  updatePost(post: Post): Observable<Post[]> {
    return this.http.put<Post[]>(
      `${this.base_url}${endpoints.POSTS.posts}/${post.id}`,
      post
    );
  }

  deletePost(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.base_url}${endpoints.POSTS.posts}/${id}`
    );
  }

  updatePostGlobal(newPost: Post){
    newPost.userId = 1
    let postsValue;
     this.currentPost.subscribe(res=>{
       postsValue = [...res, newPost]
    })
    this.posts.next(postsValue)

  }
}
