import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  @Input()
  username?: string;

  @Input()
  description?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
