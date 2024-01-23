import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from 'documentation-UI';

@Component({
  selector: 'app-bugfix-navigation',
  templateUrl: './bugfix-navigation.component.html',
  styleUrls: ['./bugfix-navigation.component.scss']
})
export class BugfixNavigationComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.BUGFIX_NAVIGATION);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Issue",
    "New Change",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  
  referencesMap = new Map<string, string>([
    ["How can I conditionally disable the routerLink attribute?", "https://stackoverflow.com/questions/35431188/how-can-i-conditionally-disable-the-routerlink-attribute"],
    ["How to Make the location.back() trigger CanDeactivate? ( in Angular 13)", "https://stackoverflow.com/questions/72496798/how-to-make-the-location-back-trigger-candeactivate-in-angular-13"]
   ]);

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
