import { Component } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import Movie from '../../models/movie';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  selectedFilter = -1;
  faArrowsRotate = faArrowsRotate;

  constructor(private movieService: MovieService) {}

  getMovies(): Movie[] {
    return this.movieService.getMovies();
  }

  filterMoviesByRating(rating: number): void {
    this.movieService.filterMoviesByRating(rating);
  }

  deFilterMovies(): void {
    this.movieService.deFilterMovies();
  }
}
