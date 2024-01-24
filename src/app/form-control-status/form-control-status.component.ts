import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RouteType, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { FormControl } from '@angular/forms';
import { getIdFromTitle } from 'angular-documentation-ui';

@Component({
  selector: 'app-form-control-status',
  templateUrl: './form-control-status.component.html',
  styleUrls: ['./form-control-status.component.scss']
})
export class FormControlStatusComponent {
  title = TYPE_TITLE_MAP.get(RouteType.FORMCONTROL_STATUS);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;
a = new FormControl
  referencesMap = new Map<string, string>([
    ["Angular 13: Top new features and updates", "https://www.angularminds.com/blog/angular-13-features-and-updates"],
    ["Angular 13 | Hot Features", "https://medium.com/@bansal.suneet/angular-13-hot-features-cf3a8234f3d4"]
  ]);

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
