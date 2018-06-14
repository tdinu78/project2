import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavItemExtraComponent } from './navbar/nav-item-extra/nav-item-extra.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchfrmComponent } from './searchfrm/searchfrm.component';
import { AgmCoreModule } from '@agm/core';
import { GglplcsComponent } from './gglplcs/gglplcs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule, MatSlideToggleModule, MatCheckboxModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavItemExtraComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    SearchfrmComponent,
    GglplcsComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
          apiKey: "AIzaSyDviOSCqGI5VGN8kP4ltqtxt930uMh5vKg",
          libraries: ["places"]
      }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
