import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { version } from '../public/config/constants';
import { getIdFromTitle } from '../public/utils/utils';

@Component({
  selector: 'app-migrations',
  templateUrl: './migrations.component.html',
  styleUrls: ['./migrations.component.scss']
})
export class MigrationsComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.MIGRATIONS);
  getIdFromTitle = getIdFromTitle;
  version = version;
  sectionTitles = [
    "Introduction",
    "Official Migration Guide",
    "Reference"
  ];

  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
