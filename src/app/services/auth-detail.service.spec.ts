import { TestBed } from '@angular/core/testing';

import { AuthDetailService } from './auth-detail.service';

describe('AuthDetailService', () => {
  let service: AuthDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
