import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { authorUrl } from '../public/config/url';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { version } from '../public/config/constants';
import { getIdFromTitle } from 'angular-documentation-ui';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  title = TYPE_TITLE_MAP.get(RouteType.DOCUMENTS);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Official Document"
  ];
  authorUrl = authorUrl;
  version = version;

  officialDocumentsMap = new Map<string, string>([
    ["Angular v13 is now Available (Angular blog)", "https://blog.angular.io/angular-v13-is-now-available-cce66f7bc296"],
    ["Angular Doc v13", "https://v13.angular.io/docs"],
  ]);

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}