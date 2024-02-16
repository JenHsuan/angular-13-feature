import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedDiagnosticsComponent } from './extended-diagnostics.component';

describe('ExtendedDiagnosticsComponent', () => {
  let component: ExtendedDiagnosticsComponent;
  let fixture: ComponentFixture<ExtendedDiagnosticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedDiagnosticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
