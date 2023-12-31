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
import { SectionContainerComponent } from './public/section-container/section-container.component';
import { DocumentsComponent } from './documents/documents.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { MigrationsComponent } from './migrations/migrations.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './public/side-bar/side-bar.component';

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
    HomeComponent,
    SectionContainerComponent,
    DocumentsComponent,
    DeprecationsComponent,
    BreakingChangesComponent,
    MigrationsComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule,
    HighlightModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
