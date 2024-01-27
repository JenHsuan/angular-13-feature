import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocReviewerContainerComponent } from './doc-reviewer-container/doc-reviewer-container.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { ThemeComponent } from './theme/theme.component';
import { NavigationButtonContainerComponent } from './navigation-button-container/navigation-button-container.component';
import { FooterContainerComponent } from './footer-container/footer-container.component';
import { MobileNavContainerComponent } from './mobile-nav-container/mobile-nav-container.component';



@NgModule({
  declarations: [
    DocReviewerContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent,
    FooterContainerComponent,
    MobileNavContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    DocReviewerContainerComponent,
    SectionContainerComponent,
    ThemeComponent,
    NavigationButtonContainerComponent,
    FooterContainerComponent,
    MobileNavContainerComponent
  ]
})
export class DocumentationUiModule { }
