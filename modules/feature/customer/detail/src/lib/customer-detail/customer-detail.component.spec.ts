import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerDetailComponent } from './customer-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  CustomerSearchService,
  mockCustomer,
} from '@customer-registration/customer-data-access';
import { of } from 'rxjs';

describe('CustomerDetailComponent', () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailComponent, RouterTestingModule],
      providers: [
        {
          provide: CustomerSearchService,
          useValue: {
            getById: () => of(mockCustomer[0]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
