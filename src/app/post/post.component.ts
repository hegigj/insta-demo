import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserData } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  username?: string;

  @Input('photo')
  src?: string;

  @Input('caption')
  description?: string;

  @Input('comment')
  comments?: number;

  @Input('likes')
  likesCount?: number;


  @Input('likedby')
  likes?: string;

  @Input('count')
  count?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {


  }

}
