import { TestBed } from '@angular/core/testing';

import { LastFMService } from './last-fmservice.service';

describe('LastFMServiceService', () => {
  let service: LastFMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastFMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
