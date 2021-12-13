import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input('photo')
  src?: string;

  @Input()
  hasStory: boolean;

  @Input()
  size: number;

  constructor() {
    this.hasStory = false;
    this.size = 50;
  }

  ngOnInit(): void {
  }

  getSize(inner: boolean = false): Record<'width' | 'height', string> {
    if (inner) {
      this.size -= this.size * .05;
    }

    const size: string = this.size + 'px';

    return {
      width: size,
      height: size
    };
  }
}
