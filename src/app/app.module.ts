import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import {NavComponent} from "./nav/nav.component";
import {AppRoutingModule} from "./app/app-routing.module";
import {PeopleModule} from "./people/people.module";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
