import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CustomerSearchComponent } from './customer-search.component';
import {
  CustomerSearchService,
  mockCustomer,
} from '@customer-registration/customer-data-access';
import { of } from 'rxjs';

describe('CustomerSearchComponent', () => {
  let component: CustomerSearchComponent;
  let fixture: ComponentFixture<CustomerSearchComponent>;
  let customerSearchService: CustomerSearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSearchComponent],
      providers: [
        {
          provide: CustomerSearchService,
          useValue: {
            searchByName: () => of(mockCustomer),
          },
        },
      ],
    }).compileComponents();

    customerSearchService = TestBed.inject(CustomerSearchService);
    fixture = TestBed.createComponent(CustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(customerSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'Diana Gutmann';
    input.dispatchEvent(new Event('input'));
    expect(customerSearchService.searchByName).not.toHaveBeenCalled();
    tick(500);
    expect(customerSearchService.searchByName).toHaveBeenCalledWith(
      input.value
    );
  }));

  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(customerSearchService, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'Diana Gutmann';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'Emmett Casper';
    input.dispatchEvent(new Event('input'));
    tick(500);

    expect(customerSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(customerSearchService, 'searchByName');

    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    input.value = 'Diana Gutmann';
    input.dispatchEvent(new Event('input'));
    tick(500);

    input.value = 'Diana Gutmann';
    input.dispatchEvent(new Event('input'));
    tick(500);

    expect(customerSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(customerSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    tick(500);
    expect(customerSearchService.searchByName).not.toHaveBeenCalled();
  }));

  it('should return customers observable correctly', () => {
    component.search(of('Diana Gutmann')).subscribe((customers) => {
      expect(customers).toEqual(mockCustomer);
    });
  });
});
