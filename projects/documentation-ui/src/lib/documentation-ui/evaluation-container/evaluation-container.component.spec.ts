import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationContainerComponent } from './evaluation-container.component';

describe('EvaluationContainerComponent', () => {
  let component: EvaluationContainerComponent;
  let fixture: ComponentFixture<EvaluationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
