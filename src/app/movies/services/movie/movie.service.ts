import { Injectable } from '@angular/core';
import { FetchContentService } from 'src/app/shared/services/fetch-content/fetch-content.service';
import Movie from '../../models/movie';
import MovieResponse from '../../models/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies: Movie[] = [];
  private fetching: boolean = false;

  constructor(private fetchContentService: FetchContentService) {
    // set loading status
    this.fetching = true;

    this.fetchContentService
      .getMovies()
      .subscribe((response: MovieResponse) => {
        this.movies = response.results.map((movie: Movie) => ({
          ...movie,
          isVisible: true,
          slug: this.slugify(movie.title),
        }));

        // update loading status
        this.fetching = false;
      });
  }

  isFetching(): boolean {
    return this.fetching;
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  removeMovieById(id: number): void {
    this.movies = this.movies.filter((movie: Movie) => movie.id !== id);
  }

  filterMoviesByRating(rating: number): void {
    this.movies = this.movies.map((movie: Movie) =>
      movie.vote_average < rating
        ? { ...movie, isVisible: false }
        : { ...movie, isVisible: true }
    );
  }

  deFilterMovies(): void {
    this.movies = this.movies.map((movie: Movie) => ({
      ...movie,
      isVisible: true,
    }));
  }

  // generate URL slug out of title
  slugify(title: string): string {
    return title
      .toLowerCase()
      .replace(/ +/g, '-')
      .replace(/[-]+/g, '-')
      .replace(/[^\w-]+/g, '');
  }

  getMovieBySlug(slug: string): Movie | undefined {
    return this.movies.find((movie: Movie) => movie.slug === slug);
  }
}
