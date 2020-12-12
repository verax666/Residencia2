import { TestBed } from '@angular/core/testing';

import { ObtMunicipiosService } from './obt-municipios.service';

describe('ObtMunicipiosService', () => {
  let service: ObtMunicipiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtMunicipiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
