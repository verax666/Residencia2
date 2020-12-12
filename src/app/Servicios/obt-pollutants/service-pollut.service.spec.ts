import { TestBed } from '@angular/core/testing';

import { ServicePollutService } from './service-pollut.service';

describe('ServicePollutService', () => {
  let service: ServicePollutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePollutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
