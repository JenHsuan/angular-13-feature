import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';
import { codeMap } from '../public/config/code-map';

@Component({
  selector: 'app-inline-font',
  templateUrl: './inline-font.component.html',
  styleUrls: ['./inline-font.component.scss']
})
export class InlineFontComponent {
  title = TypeTitleMap.get(RouteType.FONT);
  getIdFromTitle = getIdFromTitle;
  codeMap = codeMap;
  sectionTitles = [
    "Introduction",
    "Native Web Animation API",
    "Evaluation",
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
    "Even though the web animation API has supported most modern browsers, there are still a few unsupported browsers."
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
