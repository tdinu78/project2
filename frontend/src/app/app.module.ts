import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavItemExtraComponent } from './navbar/nav-item-extra/nav-item-extra.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavItemExtraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
