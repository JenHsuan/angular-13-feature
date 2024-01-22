import { TestBed } from '@angular/core/testing';

import { DocumentationUIService } from './documentation-ui.service';

describe('DocumentationUIService', () => {
  let service: DocumentationUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentationUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
