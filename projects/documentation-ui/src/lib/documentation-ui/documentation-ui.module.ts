import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './doc-reviewer-container/doc-reviewer-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { ThemeComponent } from './theme/theme.component';
import { NavigationButtonContainerComponent } from './navigation-button-container/navigation-button-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { MobileNavContainerComponent } from './mobile-nav-container/mobile-nav-container.component';
import { CodeContainerComponent } from './code-container/code-container.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { SideBarContainerComponent } from './side-bar-container/side-bar-container.component';
import { DocNavContainerComponent } from './doc-nav-container/doc-nav-container.component';
import { ReferenceContainerComponent } from './reference-container/reference-container.component';
import { EvaluationContainerComponent } from './evaluation-container/evaluation-container.component';
import { LoadingIndicatorComponent } from './loading/loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [
    DocReviewerContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent,
    FooterContainerComponent,
    MobileNavContainerComponent,
    CodeContainerComponent,
    SideBarContainerComponent,
    DocNavContainerComponent,
    ReferenceContainerComponent,
    EvaluationContainerComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HighlightModule
  ],
  exports: [
    DocReviewerContainerComponent,
    DocNavContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent,
    FooterContainerComponent,
    MobileNavContainerComponent,
    CodeContainerComponent,
    SideBarContainerComponent,
    ReferenceContainerComponent,
    EvaluationContainerComponent,
    LoadingIndicatorComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
})
export class DocumentationUiModule { }
