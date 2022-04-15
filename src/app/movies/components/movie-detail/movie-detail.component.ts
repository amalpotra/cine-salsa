import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { environment } from 'src/environments/environment';
import { faArrowLeft, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import Movie from '../../models/movie';
import MovieGenre from '../../models/movieGenre';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowsRotate = faArrowsRotate;
  private languageName = new Intl.DisplayNames(['en'], { type: 'language' });

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    !this.movieService.getMovieGenres().length &&
      this.movieService.fetchMovieGenres();
  }

  isFetching(): boolean {
    return this.movieService.isFetching();
  }

  getMovie(): Movie | undefined {
    return this.movieService.getMovieBySlug(this.route.snapshot.url[0].path);
  }

  backdropBuilder(backdropPath: string): string {
    return `linear-gradient(rgba(0,0,0,0.7) , rgba(0,0,0,0.7)), url(${environment.apiImageURL}original${backdropPath})`;
  }

  getGenresByIds(genreIds: number[]) {
    return genreIds.map(
      (genreId: number) =>
        this.movieService
          .getMovieGenres()
          .find((genre: MovieGenre) => genreId === genre.id)?.name
    );
  }

  getLanguageName(isoCode: string) {
    return this.languageName.of(isoCode);
  }
}
