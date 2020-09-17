import { TestBed } from '@angular/core/testing';

import { TakeRDVService } from './take-rdv.service';

describe('TakeRDVService', () => {
  let service: TakeRDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeRDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
