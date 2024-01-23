import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { SectionContainerComponent } from '../public/section-container/section-container.component';
import { getIdFromTitle } from 'documentation-UI';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent  {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.TESTING);
  getIdFromTitle = getIdFromTitle;
  sectionTitles = [
    "Introduction",
    "New APIs and teardown parameter",
    "Reference"
  ];

  referencesMap = new Map<string, string>([
    ["Improving Angular tests by enabling Angular testing module teardown", "https://dev.to/this-is-angular/improving-angular-tests-by-enabling-angular-testing-module-teardown-38kh"],
    ["BeforeAll vs. BeforeEach. When to use them?", "https://stackoverflow.com/questions/54517032/beforeall-vs-beforeeach-when-to-use-them"]
  ]);
  @ViewChildren(SectionContainerComponent, {read: ElementRef}) sections: QueryList<ElementRef> | undefined;

  constructor(
    private cd: ChangeDetectorRef
  ){}

  //Trigger change detection because we pass the viewChildren to app-page-container as parameters, which will cause the view change after ngAfterViewInit
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
