import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import {
  OurCustomersService,
  mockCustomer,
} from '@customer-registration/customer-data-access';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
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

  it('should render product cards correctly', () => {
    const cards: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('.card');

    expect(cards.length).toBe(mockCustomer.length);
  });
});
