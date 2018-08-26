import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

import {Reviewcomclass} from './newcom/newcom.Component';

@NgModule({ 
  declarations: [
    AppComponent,
    Reviewcomclass,
	WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
