import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EsmService } from './service/esm.service';
import { combineLatest } from 'rxjs';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

const PAGES = ['/'];

@Component({
  selector: 'app-esm',
  templateUrl: './esm.component.html',
  styleUrls: ['./esm.component.scss']
})
export class EsmComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.ESM);
  sectionTitles = [
    "Introduction",
    "Demo",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(
    private service: EsmService,
    private cd: ChangeDetectorRef
  ){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  printFromServer() {
    combineLatest(PAGES.map(page => this.service.exportPdfFromServer(page))).subscribe();
  }

  steps = `
  //1. Add proxy.conf.mjs
  
  export default {
    "/pdf": {
      "target": "http://localhost:3000",
      "secure": false
    }
  }

  //2. Update the angular.json file
  "architect": {
    ...,
    "serve": {
      "builder": "@angular-devkit/build-angular:dev-server",
      "options": {
        "proxyConfig": "proxy.conf.mjs"
      }

  //3. Setup the backend locally (http://localhost:3000)
  `;
}
