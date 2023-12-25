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
import { SectionContainerComponent } from './pulbic/section-container/section-container.component';
import { DocumentsComponent } from './documents/documents.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';

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
    BreakingChangesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true,
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        //lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
