import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationUIComponent } from './documentation-ui.component';

describe('DocumentationUIComponent', () => {
  let component: DocumentationUIComponent;
  let fixture: ComponentFixture<DocumentationUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
