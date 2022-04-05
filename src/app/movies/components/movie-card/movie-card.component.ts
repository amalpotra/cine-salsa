import { Component, Input } from '@angular/core';
import Movie from '../../models/movie';
import { MovieService } from '../../services/movie/movie.service';
import { faStar, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  faTimesCircle = faTimesCircle;
  faStar = faStar;

  constructor(private movieService: MovieService) {}

  removeMovieById(id: number) {
    this.movieService.removeMovieById(id);
  }
}
