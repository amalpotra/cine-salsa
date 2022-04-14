import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import MovieResponse from '../../../movies/models/movieResponse';
import MovieGenreResponse from 'src/app/movies/models/movieGenreResponse';

@Injectable({
  providedIn: 'root',
})
export class FetchContentService {
  private apiKey: string = environment.apiKey;
  private apiMovieURL: string = environment.apiMovieURL;
  private apiMovieGenreURL: string = environment.apiMovieGenreURL;

  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiMovieURL, {
      params: { api_key: this.apiKey },
    });
  }

  fetchMovieGenres(): Observable<MovieGenreResponse> {
    return this.http.get<MovieGenreResponse>(this.apiMovieGenreURL, {
      params: { api_key: this.apiKey },
    });
  }
}
