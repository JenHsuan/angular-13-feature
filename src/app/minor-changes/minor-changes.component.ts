import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { getIdFromTitle } from '../public/utils/utils';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-minor-changes',
  templateUrl: './minor-changes.component.html',
  styleUrls: ['./minor-changes.component.scss']
})
export class MinorChangesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.MINOR_CHANGES);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "Reference"
  ];
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  referencesMap = new Map<string, string>([
    ["MaxLengthValidator", "https://angular.io/api/forms/MaxLengthValidator"],
    ["How to parse Url in Angular?", "https://imvikaskohli.medium.com/how-to-parse-url-in-angular-86ac1275db0e"]
  ]);

  constructor(private cd: ChangeDetectorRef){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  routeLinkCancel = `
  <a [routerLink]="linkEnabled ? 'path' : null">Link</a>
  `;

  nullValidator = `
  <input name="firstName" ngModel [maxlength]="null">
  `;

  urlSerializer = `
  //v12
  export class DeprecationsContentChildrenComponent {
    constructor(private cd: ChangeDetectorRef){
      let dus = new DefaultUrlSerializer();
      //queryParams: q: "hello"
      console.log(dus.parse('/path?q=hello?&q2=2'));
    }
  }

  //v13
  export class DeprecationsContentChildrenComponent {
    constructor(private cd: ChangeDetectorRef){
      let dus = new DefaultUrlSerializer();
      //queryParams: q: "hello?", q2: "2"
      console.log(dus.parse('/path?q=hello?&q2=2'));
    }
  }
  `;
}
