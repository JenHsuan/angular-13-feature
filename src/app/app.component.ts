import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_MAP, ROUTE_TYPE, TYPE_TITLE_MAP } from './public/route/route.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedPortal = ROUTE_TYPE.HOME;

  sideBarList = [
    ROUTE_TYPE.MIGRATIONS,
    ROUTE_TYPE.DYNAMIC_COMPONENT,
    ROUTE_TYPE.CACHE,
    ROUTE_TYPE.ESM,
    ROUTE_TYPE.TESTING,
    ROUTE_TYPE.FONT,
    ROUTE_TYPE.NOTES,
    ROUTE_TYPE.BREAKING_CHANGE,
    ROUTE_TYPE.DEPRECATIONS,
    ROUTE_TYPE.DOCUMENTS,
  ];

  constructor(private changeDetector: ChangeDetectorRef,) {}

  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }


  getPortalStyle(portal: string) {
    return this.selectedPortal === portal ? 'tab-item current' : 'tab-item';
  }

  getRouteTitle(type: ROUTE_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
