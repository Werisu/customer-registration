import { TestBed } from '@angular/core/testing';

import { ZipCodeService } from './zip-code.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ZipCodeService', () => {
  let service: ZipCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ZipCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
