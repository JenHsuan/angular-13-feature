import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorChangesComponent } from './minor-changes.component';

describe('MinorChangesComponent', () => {
  let component: MinorChangesComponent;
  let fixture: ComponentFixture<MinorChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
