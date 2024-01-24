import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from 'angular-documentation-ui';

@Component({
  selector: 'app-inline-font',
  templateUrl: './inline-font.component.html',
  styleUrls: ['./inline-font.component.scss']
})
export class InlineFontComponent {
  title = TYPE_TITLE_MAP.get(RouteType.FONT);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Web Animations via Native Web API",
    "Evaluation for Web Animations API",
    "Inline Resource (Adobe font)",
    "Reference"
  ];
  
  prosForInlineFont = [
    "Inline font could help to improve the FCP."
  ];
  consForInlineFont = [];

  prosForCSSVariables = [
  ];
  consForCSSVariables = [];

  prosForWebAnimationsAPI = [
    "We can only write the animation logic in the component, which is more convenient for us to maintain the code."
  ];
  consForWebAnimationsAPI = [
    "Even though the web animation API has supported most modern broswers, there are still a few unsupported broswers."
  ];

  referencesMap = new Map<string, string>([
    ["Optimizing Apps with Resource Inlining", "https://www.youtube.com/watch?v=yOpy9UMQG-Y&t=184s"],
    ["The [New] State of CSS in Angular", "https://blog.angular.io/the-new-state-of-css-in-angular-bec011715ee6"],
    ["clip-path", "https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path"],
    ["讓人垂涎三尺的 Web Animations API", "https://kusakawazeusu.medium.com/%E8%AE%93%E4%BA%BA%E5%9E%82%E6%B6%8E%E4%B8%89%E5%B0%BA%E7%9A%84-web-animations-api-92dc85f670bb"]
  ]);
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(
    private cd: ChangeDetectorRef
  ){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
