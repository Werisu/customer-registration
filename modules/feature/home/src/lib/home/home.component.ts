import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Customers,
  OurCustomersService,
} from '@customer-registration/customer-data-access';
import { Observable } from 'rxjs';
import { CustomerCardComponent } from '@customer-registration/customer-ui';

@Component({
  selector: 'customer-registration-home',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public customers$: Observable<Customers> =
    this.ourCustomersService.getCustomers();
  constructor(private ourCustomersService: OurCustomersService) {}
}
