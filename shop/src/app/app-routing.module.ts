import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChariotsComponent } from './chariots/chariots.component';
import { ProduitsComponent } from './produits/produits.component';


const routes: Routes = [
  { path:'' , component:ProduitsComponent },
  { path:'produits' , component:ProduitsComponent },
  { path:'chariot' , component:ChariotsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
