import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movies-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieDetailComponent,
  ],
  imports: [CommonModule, MovieRoutingModule, SharedModule, FontAwesomeModule],
})
export class MovieModule {}
