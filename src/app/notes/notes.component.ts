import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from '../public/utils/utils';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Overview",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["How can I conditionally disable the routerLink attribute?", "https://stackoverflow.com/questions/35431188/how-can-i-conditionally-disable-the-routerlink-attribute"],
    ["MaxLengthValidator", "https://angular.io/api/forms/MaxLengthValidator"],
    ["How to Make the location.back() trigger CanDeactivate? ( in Angular 13)", "https://stackoverflow.com/questions/72496798/how-to-make-the-location-back-trigger-candeactivate-in-angular-13"]
  ]);
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

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

  cancelRoute = `
  @NgModule({
    imports: [RouterModule.forRoot(
      routes, 
      { canceledNavigationResolution: 'computed' },
    )],
    exports: [RouterModule]
  })
  `;
}