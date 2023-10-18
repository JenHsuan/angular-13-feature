import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsmComponent } from './esm.component';

describe('EsmComponent', () => {
  let component: EsmComponent;
  let fixture: ComponentFixture<EsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
