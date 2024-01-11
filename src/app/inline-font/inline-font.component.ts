import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-inline-font',
  templateUrl: './inline-font.component.html',
  styleUrls: ['./inline-font.component.scss']
})
export class InlineFontComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.FONT);
  sectionTitles = [
    "Introduction",
    "Demo: CSS Variables",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(
    private cd: ChangeDetectorRef
  ){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  steps = `
  //1. Update angular.json (build -> configuration -> production)

  "optimization": {
    "fonts": {
      "inline": true
    },
    "styles": {
      "inlineCritical": true
    }
  }

  //2. Search the favorite font on https://fonts.adobe.com/fonts
  
  `;

  cssVariable = `
  <!-- styles.scss -->
  :root {
    --blue: #1e90ff;
    --white: #ffffff; 
  }
  
  <!-- component level scss -->
  .css-variable-demo-btn {
    background-color: var(--white);
    color: var(--blue);
    border: 1px solid var(--blue);
    padding: 5px;
  }

  <!-- component level HTML -->
  <div>
    <button class="css-variable-demo-btn">Demo</button>
  </div>
  `;

}
