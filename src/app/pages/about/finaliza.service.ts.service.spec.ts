  import { TestBed } from '@angular/core/testing';

import { FinalizaServiceTsService } from './finaliza.service.ts.service';

describe('FinalizaServiceTsService', () => {
  let service: FinalizaServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalizaServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
