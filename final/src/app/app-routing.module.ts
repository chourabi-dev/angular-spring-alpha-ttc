import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { AddInterventionComponent } from './pages/add-intervention/add-intervention.component';
import { AddVehiculeComponent } from './pages/add-vehicule/add-vehicule.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { DetailsVehiculeComponent } from './pages/details-vehicule/details-vehicule.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VehiculesPageComponent } from './pages/vehicules-page/vehicules-page.component';


const routes: Routes = [
  { path:'', component:HomePageComponent },
  { path:'clients', component:ClientsPageComponent },
  { path:'clients/add', component:AddClientComponent },
  

  { path:'vehicules', component:VehiculesPageComponent },
  { path:'vehicules/add', component:AddVehiculeComponent },
  { path:'vehicules/details/:id', component:DetailsVehiculeComponent },
  
  { path:'vehicules/add-intervention/:id', component:AddInterventionComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
