import { Component } from '@angular/core';

export interface Suggestion {
  image: string;
  username: string;
  description: string;
}

export interface UserData {
  image: string;
  username: string;
  followers: number;
  following: number;
  disabled: boolean;
  suggestions: Suggestion[];
}

export interface Post {
  user: UserData;
  image: string;
  description: string;
  likesCount: number;
  likes: UserData[];
  comments: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insta-demo';

  users: UserData[] = [
    {
      image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
      username: 'hegigjoka',
      followers: 10,
      following: 11,
      disabled: false,
      suggestions: [
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'Marsiona',
          description: 'New to insta'
        },
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'Regi',
          description: 'New to insta'
        },
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'Kristela',
          description: 'New to insta'
        }
      ]
    },

    {
      image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
      username: 'Marsi',
      followers: 10,
      following: 11,
      disabled: false,
      suggestions: [

        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'Regi',
          description: 'New to insta'
        },
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'Kristela',
          description: 'New to insta'
        }
      ]
    }

  ];




  posts: Post[] = [
    {
      user: this.users[0],
      image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
      description: 'Summer 2021...',
      likes: [...this.users],
      likesCount: 255,
      comments: 6
    }
  ];

  log(e: any): void {
    console.log(e);
  }
}
