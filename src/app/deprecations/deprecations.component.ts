import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';

@Component({
  selector: 'app-deprecations',
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export class DeprecationsComponent {
  title = TypeTitleMap.get(RouteType.DEPRECATIONS);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Introduction to the Server-side Rendering (SSR)",
    "SSR in Angular 13 with ng-universal",
    "Evaluation for ng-universal",
    "Reference"
  ];

  pros = [
    "SSR can avoid additional round-trips on the client so that it can optimize the performance.",
  ];
  cons = [
    "According to the expirements, the paractices of SSR is not easy to implement in v13.",
    "renderModule can be slow as it's synchronous and single-threaded."
  ];

  referencesMap = new Map<string, string>([
    ["Arrow function Vs String path in LoadChildren Route in Angular", "https://stackoverflow.com/questions/57346350/arrow-function-vs-string-path-in-loadchildren-route-in-angular"],
    ["Angular5 服务器渲染(SSR)", "https://www.cnblogs.com/huiguo/p/10809264.html"],
    ["How to build an Angular App with Server-Side Rendering", "https://medium.com/upstate-interactive/how-to-build-an-angular-app-with-server-side-rendering-f7f415b851c8"],
    ["React 初学 - 用 renderToString 在服务器上渲染 React - 个人笔记54", "https://blog.csdn.net/Amnesiac666/article/details/119611948"],
    ["Top 25 Angular Server Side Rendering Interview Questions and Answers", "https://interviewprep.org/angular-server-side-rendering-interview-questions/"]
  ]);
  items: number[] = [];
  cnt = 0;

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
