import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from '../public/utils/utils';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.scss']
})
export class CacheComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.CACHE);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Evaluation",
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
  
  angularjson = `
  //angular.json

  {
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "cli": {
      "analytics": "a7da08fe-30d4-42ce-a659-5296089127b8",
      "cache": {
        "enabled": true,
        "environment": "all",
        "path": ".angular-cache"
      }
      ...
  }
  `;

  angularcli = `
  //angular-cli
  
  ng config cli.cache.enabled false/true
  ng config cli.cache.environment all/ci/local
  ng config cli.cache.path ".angular-cache"
  `;

}
