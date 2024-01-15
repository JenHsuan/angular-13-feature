import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavContainerComponent } from './mobile-nav-container.component';

describe('MobileNavContainerComponent', () => {
  let component: MobileNavContainerComponent;
  let fixture: ComponentFixture<MobileNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
