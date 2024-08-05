import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExploreService {
  private apiUrl = 'assets/data/explore.json';

  constructor(private http: HttpClient) {}

  getExploreData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
