import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitsComponent } from './produits/produits.component';
import { ChariotsComponent } from './chariots/chariots.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduitsComponent,
    ChariotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
