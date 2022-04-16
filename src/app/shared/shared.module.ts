import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PosterComponent } from './components/poster/poster.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    PosterComponent,
    FilterBarComponent,
    FilterButtonComponent,
    RatingBarComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FontAwesomeModule],
  exports: [
    HeaderComponent,
    PosterComponent,
    FilterBarComponent,
    FilterButtonComponent,
    RatingBarComponent,
  ],
})
export class SharedModule {}
