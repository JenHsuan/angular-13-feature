import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EsmService } from './service/esm.service';
import { combineLatest } from 'rxjs';
import { RouteType, TypeTitleMap } from '../public/route/route.domain';
import { SectionContainerComponent, getIdFromTitle } from 'angular-documentation-ui';

const PAGES = ['/'];

@Component({
  selector: 'app-esm',
  templateUrl: './esm.component.html',
  styleUrls: ['./esm.component.scss']
})
export class EsmComponent {
  title = TypeTitleMap.get(RouteType.ESM);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["[Node] CommonJS Modules and ES Modules", "https://pjchender.dev/nodejs/node-module-system/"],
    ["在 2021 可以使用 ESModule 了嗎？", "https://chentsulin.medium.com/%E5%9C%A8-2021-%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8-esmodule-%E4%BA%86%E5%97%8E-c05c3408e69"]
  ]);
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
}
