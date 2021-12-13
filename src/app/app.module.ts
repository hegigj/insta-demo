import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { PostComponent } from './post/post.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestionsComponent,
    PostComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
