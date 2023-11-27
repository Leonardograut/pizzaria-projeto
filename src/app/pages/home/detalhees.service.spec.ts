import { TestBed } from '@angular/core/testing';

import { DetalheesService } from './detalhees.service';

describe('DetalheesService', () => {
  let service: DetalheesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
