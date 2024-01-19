import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFontWebAnimationComponent } from './inline-font-web-animation.component';

describe('InlineFontWebAnimationComponent', () => {
  let component: InlineFontWebAnimationComponent;
  let fixture: ComponentFixture<InlineFontWebAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineFontWebAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineFontWebAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
