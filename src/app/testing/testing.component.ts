import { Component, OnInit } from '@angular/core';
import { ROUTE_TYPE, TYPE_TITLE_MAP } from '../public/route/route.domain';
import { escapeHtml } from '../public/utils/utils';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  title = TYPE_TITLE_MAP.get(ROUTE_TYPE.TESTING);
  escapeHtml = escapeHtml;

  testComponent = `
  //legacy code:

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  });

  //use TestBed.initTestEnvironment 
  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting(),
        {
            teardown: { destroyAfterEach: true }
        }
    );
  });

  //Update TestBed.configureTestingModule
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingComponent ],
      teardown: { destroyAfterEach: true }
    })
    .compileComponents();
  });
  `;

}
