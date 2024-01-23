import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './doc-reviewer-container/doc-reviewer-container.component';



@NgModule({
  declarations: [
    DocReviewerContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DocReviewerContainerComponent
  ]
})
export class DocumentationUiModule { }
