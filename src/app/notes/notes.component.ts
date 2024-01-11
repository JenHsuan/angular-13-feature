import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.NOTES);
  sectionTitles = [
    "Overview",
    "Reference"
  ];
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