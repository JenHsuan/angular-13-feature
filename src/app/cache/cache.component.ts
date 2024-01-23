import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from 'documentation-UI';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent {
  title = TYPE_TITLE_MAP.get(RouteType.CACHE);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];

  pros = [
    "With the feature, we are able to update the cache configuration in the efficient way.",
  ];
  cons = [];

  referencesMap = new Map<string, string>([
    ["ng cache", "https://angular.io/cli/cache"],
    ["What's new in Angular CLI 13.0?", "https://blog.ninja-squad.com/2021/11/03/angular-cli-13.0/"]
  ]);

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
