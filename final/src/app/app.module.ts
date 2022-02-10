import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { VehiculesPageComponent } from './pages/vehicules-page/vehicules-page.component';
import { AddVehiculeComponent } from './pages/add-vehicule/add-vehicule.component';
import { DetailsVehiculeComponent } from './pages/details-vehicule/details-vehicule.component';
import { AddInterventionComponent } from './pages/add-intervention/add-intervention.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ClientsPageComponent,
    AddClientComponent,
    VehiculesPageComponent,
    AddVehiculeComponent,
    DetailsVehiculeComponent,
    AddInterventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
