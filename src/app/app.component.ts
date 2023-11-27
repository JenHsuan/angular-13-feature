import { CdkPortal, Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';

enum PORTAL_TYPE {
  DYNAMIC_COMPONENT = 'DYNAMIC_COMPONENT',
  CACHE = 'CACHE',
  TESTING = 'TESTING',
  ESM = 'ESM',
  NOTES = 'NOTES',
  FONT = 'FONT',
  HOME = 'HOME'
}

const PORTAL_MAP = new Map<PORTAL_TYPE, number>([
  [PORTAL_TYPE.DYNAMIC_COMPONENT, 0],
  [PORTAL_TYPE.CACHE, 1],
  [PORTAL_TYPE.TESTING, 2],
  [PORTAL_TYPE.ESM, 3],
  [PORTAL_TYPE.FONT, 4],
  [PORTAL_TYPE.NOTES, 5],
  [PORTAL_TYPE.HOME, 6],
])

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
}
