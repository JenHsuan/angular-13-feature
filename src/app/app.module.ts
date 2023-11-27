import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';
import { StandardComponent } from './standard/standard.component';
import { DynamicComponent } from './standard/dynamic/dynamic.component';
import { CacheComponent } from './cache/cache.component';
import { TestingComponent } from './testing/testing.component';
import { EsmComponent } from './esm/esm.component';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { InlineFontComponent } from './inline-font/inline-font.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StandardComponent,
    DynamicComponent,
    CacheComponent,
    TestingComponent,
    EsmComponent,
    NotesComponent,
    InlineFontComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
