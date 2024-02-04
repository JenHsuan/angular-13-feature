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
import { DocumentsComponent } from './documents/documents.component';
import { DeprecationsComponent } from './deprecations/deprecations.component';
import { BreakingChangesComponent } from './breaking-changes/breaking-changes.component';
import { MigrationsComponent } from './migrations/migrations.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarContainerComponent } from './public/side-bar-container/side-bar-container.component';
import { PageContainerComponent } from './public/page-container/page-container.component';
import { ReferenceContainerComponent } from './public/reference-container/reference-container.component';
import { BugfixNavigationComponent } from './bugfix-navigation/bugfix-navigation.component';
import { MinorChangesComponent } from './minor-changes/minor-changes.component';
import { EvaluationContainerComponent } from './public/evaluation-container/evaluation-container.component';
import { InlineFontWebAnimationComponent } from './inline-font/inline-font-web-animation/inline-font-web-animation.component';
import { FormControlStatusComponent } from './form-control-status/form-control-status.component';
import { DocumentationUiModule } from 'angular-documentation-ui';

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
    DocumentsComponent,
    DeprecationsComponent,
    BreakingChangesComponent,
    MigrationsComponent,
    SideBarContainerComponent,
    PageContainerComponent,
    ReferenceContainerComponent,
    BugfixNavigationComponent,
    MinorChangesComponent,
    EvaluationContainerComponent,
    InlineFontWebAnimationComponent,
    FormControlStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule,
    //HighlightModule,
    AppRoutingModule,
    //FontAwesomeModule,
    DocumentationUiModule
  ],
  // providers: [
  //   {
  //     provide: HIGHLIGHT_OPTIONS,
  //     useValue: {
  //       fullLibraryLoader: () => import('highlight.js'),
  //     }
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
