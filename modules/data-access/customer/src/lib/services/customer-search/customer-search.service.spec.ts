import { TestBed } from '@angular/core/testing';

import { CustomerSearchService } from './customer-search.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Customer, Customers } from '../../models/customer.model';
import { mockCustomer } from '../../mocks/customer.mock';

describe('CustomerSearchService', () => {
  let service: CustomerSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return customers correctly', () => {
    const mockName = 'Diana';
    const url = `${service.apiUrl}/customer?name=${mockName}`;
    let result: Customers = [];

    service
      .searchByName(mockName)
      .subscribe((customers) => (result = customers));

    const request = httpMock.expectOne(url);
    request.flush(mockCustomer);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCustomer);
  });

  it('should return customer by id correctly', () => {
    const mockId = '123';
    const url = `${service.apiUrl}/customer/${mockId}`;
    let result!: Customer;

    service.getById(mockId).subscribe((customer) => (result = customer));

    const request = httpMock.expectOne(url);
    request.flush(mockCustomer[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockCustomer[0]);
  });
});
