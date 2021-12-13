import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  username?: string;

  @Output()
  search: EventEmitter<string>;

  constructor() {
    this.search = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  emitSearchResult(event: KeyboardEvent): void {
    if (event.target instanceof HTMLInputElement) {
      this.search.emit(event.target.value);
    }
  }
}
