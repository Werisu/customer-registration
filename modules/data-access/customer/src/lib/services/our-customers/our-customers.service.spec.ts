import { TestBed } from '@angular/core/testing';

import { OurCustomersService } from './our-customers.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Customers } from '../../models/customer.model';
import { mockCustomer } from '../../mocks/customer.mock';

describe('OurCustomersService', () => {
  let service: OurCustomersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OurCustomersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return our customers correctly', () => {
    const url = `${service.apiUrl}/customer?page=1&limit=20`;
    let result: Customers = [];

    service.getCustomers().subscribe((customers) => (result = customers));

    const request = httpMock.expectOne(url);
    request.flush(mockCustomer);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCustomer);
  });
});
