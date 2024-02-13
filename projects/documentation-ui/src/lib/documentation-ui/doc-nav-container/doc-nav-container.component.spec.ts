import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNavContainerComponent } from './doc-nav-container.component';

describe('DocNavContainerComponent', () => {
  let component: DocNavContainerComponent;
  let fixture: ComponentFixture<DocNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocNavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
