import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFontComponent } from './inline-font.component';

describe('InlineFontComponent', () => {
  let component: InlineFontComponent;
  let fixture: ComponentFixture<InlineFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
