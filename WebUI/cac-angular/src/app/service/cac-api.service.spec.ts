import { TestBed } from '@angular/core/testing';

import { CacApiService } from './cac-api.service';

describe('CacApiService', () => {
  let service: CacApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
