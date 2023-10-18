import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
