import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailPipe } from './email.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { BlogComponent } from './blog/blog.component';
import { DessinComponent } from './dessin/dessin.component';
import { SportComponent } from './sport/sport.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailPipe,
    NavbarComponent,
    ArticleComponent,
    LikeButtonComponent,
    AboutPageComponent,
    ArticlesPageComponent,
    NotFoundPageComponent,
    BlogComponent,
    DessinComponent,
    SportComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
