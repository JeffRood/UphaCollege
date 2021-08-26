import { TestBed } from '@angular/core/testing';

import { AssigmentMatterService } from './assigment-matter.service';

describe('AssigmentMatterService', () => {
  let service: AssigmentMatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigmentMatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
