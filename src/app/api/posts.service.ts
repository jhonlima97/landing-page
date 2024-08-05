import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private apiUrl = 'assets/data/posts.json';

  constructor(private http: HttpClient) {}

  getPostsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
