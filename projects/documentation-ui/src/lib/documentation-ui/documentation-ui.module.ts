import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './doc-reviewer-container/doc-reviewer-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';



@NgModule({
  declarations: [
    DocReviewerContainerComponent,
    SectionContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DocReviewerContainerComponent,
    SectionContainerComponent
  ]
})
export class DocumentationUiModule { }
