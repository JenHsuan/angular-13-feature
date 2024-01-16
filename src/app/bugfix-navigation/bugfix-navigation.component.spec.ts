import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugfixNavigationComponent } from './bugfix-navigation.component';

describe('BugfixNavigationComponent', () => {
  let component: BugfixNavigationComponent;
  let fixture: ComponentFixture<BugfixNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugfixNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugfixNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
