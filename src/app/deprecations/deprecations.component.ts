import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from '../public/utils/utils';

@Component({
  selector: 'app-deprecations',
  templateUrl: './deprecations.component.html',
  styleUrls: ['./deprecations.component.scss']
})
export class DeprecationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.DEPRECATIONS);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "SSR (server-side rendering) with ng universal",
    "Evaluation for ng universal",
    "Reference"
  ];

  pros = [
    "SSR can provide less TTI.",
  ];
  cons = [
    "According to the expirements, the paractices of SSR is not easy to implement in v13."
  ];

  referencesMap = new Map<string, string>([
    ["Arrow function Vs String path in LoadChildren Route in Angular", "https://stackoverflow.com/questions/57346350/arrow-function-vs-string-path-in-loadchildren-route-in-angular"],
    ["Angular5 服务器渲染(SSR)", "https://www.cnblogs.com/huiguo/p/10809264.html"],
    ["How to build an Angular App with Server-Side Rendering", "https://medium.com/upstate-interactive/how-to-build-an-angular-app-with-server-side-rendering-f7f415b851c8"]
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
