import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Customers,
  mockCustomer,
} from '@customer-registration/customer-data-access';

@Component({
  selector: 'customer-registration-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public customers: Customers = mockCustomer;
  constructor() {}
}
