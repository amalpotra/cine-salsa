import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import MovieResponse from '../../../movies/models/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class FetchContentService {
  private apiKey: string = environment.apiKey;
  private apiMovieURL: string = environment.apiMovieURL;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiMovieURL, {
      params: { api_key: this.apiKey },
    });
  }
}
