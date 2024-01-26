import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './doc-reviewer-container/doc-reviewer-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { ThemeComponent } from './theme/theme.component';
import { NavigationButtonContainerComponent } from './navigation-button-container/navigation-button-container.component';



@NgModule({
  declarations: [
    DocReviewerContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DocReviewerContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent
  ]
})
export class DocumentationUiModule { }
