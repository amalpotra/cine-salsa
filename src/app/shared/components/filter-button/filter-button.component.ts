import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
})
export class FilterButtonComponent {
  @Input() title: string = '';
  @Input() isActive: boolean = false;
  @Output() filter: EventEmitter<void> = new EventEmitter();
  @Output() deFilter: EventEmitter<void> = new EventEmitter();

  constructor() {}

  filterToggle(): void {
    this.isActive = !this.isActive;
    this.isActive ? this.filter.emit() : this.deFilter.emit();
  }
}
