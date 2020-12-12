import { TestBed } from '@angular/core/testing';

import { ObtEstadosService } from './obt-estados.service';

describe('ObtEstadosService', () => {
  let service: ObtEstadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtEstadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
