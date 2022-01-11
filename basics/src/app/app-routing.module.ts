import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


const routes: Routes = [
  // redirect 
  //{ path:'', redirectTo:'articles' , pathMatch:'full' },
  { path:'', component:ArticlesPageComponent },
  { path:'articles' , component: ArticlesPageComponent },
  { path:'about' , component: AboutPageComponent },
  { path:'**' , component : NotFoundPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
