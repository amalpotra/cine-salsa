import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import MovieResponse from '../../../movies/models/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class FetchContentService {
  private apiBaseURL: string = environment.apiBaseURL;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiBaseURL);
  }
}
