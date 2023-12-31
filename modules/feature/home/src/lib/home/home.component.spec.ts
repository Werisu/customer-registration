import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {
  OurCustomersService,
  mockCustomer,
} from '@customer-registration/customer-data-access';
import { of } from 'rxjs';
import { CustomerCardComponent } from '@customer-registration/customer-ui';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        CustomerCardComponent,
        RouterTestingModule,
        NgbModalModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: OurCustomersService,
          useValue: { getCustomers: () => of(mockCustomer) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render customer cards correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll(
      'customer-registration-customer-card'
    );

    expect(cards.length).toBe(mockCustomer.length);
  });
});
