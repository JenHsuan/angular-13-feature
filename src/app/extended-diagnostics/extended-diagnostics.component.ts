import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';
import { codeMap } from '../public/config/code-map';

@Component({
  selector: 'app-extended-diagnostics',
  templateUrl: './extended-diagnostics.component.html',
  styleUrls: ['./extended-diagnostics.component.scss']
})
export class ExtendedDignosticsComponent {
  title = TypeTitleMap.get(RouteType.EXTENDED_DIGNOSTICS);
  getIdFromTitle = getIdFromTitle;
  codeMap = codeMap;
  sectionTitles = [
    "Introduction",
    "NG8101 - invalidBananaInBox",
    "NG8102 - nullishCoalescingNotNullable",
    "Customization",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["Extended Diagnostics", "https://blog.angular.io/angular-extended-diagnostics-53e2fa19ece9"]
  ]);

  pros = [
    "User friendly: The user can check the title when there is a bunch of tabs on the browser",
  ];

  cons = [];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}

