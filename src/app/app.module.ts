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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './public/doc-reviewer-container/doc-reviewer-container.component';
import { CodeContainerComponent } from './public/code-container/code-container.component';
import { FooterContainerComponent } from './public/footer-container/footer-container.component';
import { SideBarContainerComponent } from './public/side-bar-container/side-bar-container.component';
import { ThemeComponent } from './public/theme/theme.component';
import { PageContainerComponent } from './public/page-container/page-container.component';
import { NavigationButtonContainerComponent } from './public/navigation-button-container/navigation-button-container.component';
import { ReferenceContainerComponent } from './public/reference-container/reference-container.component';
import { MobileNavContainerComponent } from './public/mobile-nav-container/mobile-nav-container.component';
import { TodoComponent } from './todo/todo.component';
import { BugfixNavigationComponent } from './bugfix-navigation/bugfix-navigation.component';
import { MinorChangesComponent } from './minor-changes/minor-changes.component';
import { EvaluationContainerComponent } from './public/evaluation-container/evaluation-container.component';
import { InlineFontWebAnimationComponent } from './inline-font/inline-font-web-animation/inline-font-web-animation.component';

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
    CodeContainerComponent,
    DocReviewerContainerComponent,
    FooterContainerComponent,
    SideBarContainerComponent,
    ThemeComponent,
    PageContainerComponent,
    NavigationButtonContainerComponent,
    ReferenceContainerComponent,
    MobileNavContainerComponent,
    TodoComponent,
    BugfixNavigationComponent,
    MinorChangesComponent,
    EvaluationContainerComponent,
    InlineFontWebAnimationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PortalModule,
    HighlightModule,
    AppRoutingModule,
    FontAwesomeModule
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
