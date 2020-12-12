import { TestBed } from '@angular/core/testing';

import { ObtPaisesService } from './obt-paises.service';

describe('ObtPaisesService', () => {
  let service: ObtPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
