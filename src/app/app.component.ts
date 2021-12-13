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
          image: 'https://instagram.ftia4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/64926809_2088360047958811_4070903499322294272_n.jpg?_nc_ht=instagram.ftia4-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Jzu9hP8orU4AX_DI4uf&edm=ABfd0MgBAAAA&ccb=7-4&oh=45071d4ac32f0f32b8ccc6d7c9e57269&oe=61B98E67&_nc_sid=7bff83',
          username: 'filani',
          description: 'New to insta'
        },
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'filani',
          description: 'New to insta'
        },
        {
          image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
          username: 'filani',
          description: 'New to insta'
        }
      ]
    }
  ];

  posts: Post[] = [
    {
      user: this.users[0],
      image: 'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648',
      description: 'Awesome Post',
      likes: [...this.users],
      likesCount: 1,
      comments: 1
    }
  ];

  log(e: any): void {
    console.log(e);
  }
}
