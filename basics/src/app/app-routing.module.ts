import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { BlogComponent } from './blog/blog.component';
import { DessinComponent } from './dessin/dessin.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SportComponent } from './sport/sport.component';


const routes: Routes = [
  // redirect 
  //{ path:'', redirectTo:'articles' , pathMatch:'full' },
  { path:'', component:ArticlesPageComponent },
  { path:'articles' , component: ArticlesPageComponent },
  { path:'about' , component: AboutPageComponent },
  { path:'blog' , component: BlogComponent , children:[
    { path:'sport' , component:SportComponent },
    { path:'dessin' , component:DessinComponent },
    { path:"details/:ninja" , component:ArticleDetailsComponent }
  ]},
  
  { path:'**' , component : NotFoundPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
