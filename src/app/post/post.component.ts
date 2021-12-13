import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  username?: string;
  @Input()
  description?: string;
  @Input()
  likesCount?: 1;

  @Input()
  comments?: number

  constructor() { }

  
  ngOnDestroy(): void {

  }

}
