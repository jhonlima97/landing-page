import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  private apiUrl = 'assets/data/reviews.json';

  constructor(private http: HttpClient) {}

  getReviewsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
