import { CdkPortal, Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { PORTAL_MAP, PORTAL_TYPE, TYPE_TITLE_MAP } from './pulbic/route/route.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notes of Angular v13';
  updateTime = '2023/10/18';
  @ViewChildren(CdkPortal)
  templatPortals: QueryList<CdkPortal>;

  currentPortal: Portal<any>;

  selectedPortal = PORTAL_TYPE.HOME;

  sideBarList = [
    PORTAL_TYPE.DYNAMIC_COMPONENT,
    PORTAL_TYPE.CACHE,
    PORTAL_TYPE.ESM,
    PORTAL_TYPE.TESTING,
    PORTAL_TYPE.FONT,
    PORTAL_TYPE.NOTES,
    PORTAL_TYPE.BREAKING_CHANGE,
    PORTAL_TYPE.DEPRECATIONS,
    PORTAL_TYPE.DOCUMENTS,
  ];

  constructor(private changeDetector: ChangeDetectorRef,) {}

  ngAfterViewInit(): void {
    this.currentPortal = this.templatPortals.last;
    this.changeDetector.detectChanges();
  }

  changePortal(portalType: string) {
    let index = PORTAL_MAP.get(portalType as PORTAL_TYPE);
    this.selectedPortal = portalType as PORTAL_TYPE;
    if (index !== undefined) {
      this.currentPortal = this.templatPortals.toArray()[index];
    }
  }

  getPortalStyle(portal: string) {
    return this.selectedPortal === portal ? 'tab-item current' : 'tab-item';
  }

  getRouteTitle(type: PORTAL_TYPE) {
    return TYPE_TITLE_MAP.get(type) ? TYPE_TITLE_MAP.get(type) : '';
  }
}
