import { TestBed } from '@angular/core/testing';

import { AuthMailService } from './auth-mail.service';

describe('AuthMailService', () => {
  let service: AuthMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
