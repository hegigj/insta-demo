import {Component, Input, OnInit} from '@angular/core';


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

  @Input('description')
  description?: string;

  @Input('comment')
  comments?: number;

  @Input('likes')
  likesCount?: number;


  constructor() { }

  ngOnInit(): void {
  }

}
