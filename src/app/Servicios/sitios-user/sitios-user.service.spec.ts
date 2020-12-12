import { TestBed } from '@angular/core/testing';

import { SitiosUserService } from './sitios-user.service';

describe('SitiosUserService', () => {
  let service: SitiosUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitiosUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
