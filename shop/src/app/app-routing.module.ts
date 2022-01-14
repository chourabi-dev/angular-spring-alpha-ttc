import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChariotsComponent } from './chariots/chariots.component';
import { ProduitsComponent } from './produits/produits.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  { path:'' , component:ProduitsComponent , canActivate:[AuthGuard] },
  { path:'produits' , component:ProduitsComponent , canActivate:[AuthGuard] },
  { path:'chariot' , component:ChariotsComponent , canActivate:[AuthGuard] },
  { path:'signin' , component:SigninComponent  },
  { path:'users' , component:UsersComponent  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
