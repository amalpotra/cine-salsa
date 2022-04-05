import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../../models/movie';
import { MovieService } from '../../services/movie/movie.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  faArrowLeft = faArrowLeft;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  getMovie(): Movie | undefined {
    return this.movieService.getMovieBySlug(this.route.snapshot.url[0].path);
  }
}
