import { TestBed } from '@angular/core/testing';

import { ObtInfoIndicesService } from './obt-info-indices.service';

describe('ObtInfoIndicesService', () => {
  let service: ObtInfoIndicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtInfoIndicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
