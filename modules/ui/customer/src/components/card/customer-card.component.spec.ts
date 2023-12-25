import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerCardComponent } from './customer-card.component';
import { mockCustomer } from '@customer-registration/customer-data-access';

describe('CustomerCardComponent', () => {
  let component: CustomerCardComponent;
  let fixture: ComponentFixture<CustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerCardComponent);
    component = fixture.componentInstance;
    component.customer = mockCustomer[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render customer card info correctly', () => {
    const card = fixture.nativeElement.querySelector('div.card');
    expect(card).toBeTruthy();
    expect(card.textContent).toContain(component.customer.name);
    expect(card.textContent).toContain(component.customer.email);
  });
});
