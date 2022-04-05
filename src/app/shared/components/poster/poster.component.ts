import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent {
  @Input() posterSource: string = '';
  @Input() posterWidth: number = 0;

  constructor() {}

  posterUrlBuilder(width: number, source: string): string {
    return `${environment.apiPosterURL}w${width}/${source}`;
  }
}
