import { TestBed } from '@angular/core/testing';

import { DieticianService } from './dietician.service';

describe('DieticianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DieticianService = TestBed.get(DieticianService);
    expect(service).toBeTruthy();
  });
});
