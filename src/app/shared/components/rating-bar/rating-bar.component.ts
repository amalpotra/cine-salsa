import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss'],
})
export class RatingBarComponent {
  @Input() rating: number = 0;
  constructor() {}
}
