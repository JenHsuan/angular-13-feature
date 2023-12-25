import { Component, OnInit } from '@angular/core';
import { PORTAL_TYPE, TYPE_TITLE_MAP } from '../pulbic/route/route.domain';
import { escapeHtml } from '../pulbic/utils/utils';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {
  title = TYPE_TITLE_MAP.get(PORTAL_TYPE.TESTING);
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
