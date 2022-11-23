import { TestBed } from '@angular/core/testing';

import { GeneralMaqPortService } from './general-maq-port.service';

describe('GeneralMaqPortService', () => {
  let service: GeneralMaqPortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralMaqPortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
