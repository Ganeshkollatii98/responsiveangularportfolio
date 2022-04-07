import { TestBed } from '@angular/core/testing';

import { RootDataService } from './root-data.service';

describe('RootDataService', () => {
  let service: RootDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
