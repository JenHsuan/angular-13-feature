import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandardComponent } from './standard/standard.component';
import { DynamicComponent } from './standard/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
