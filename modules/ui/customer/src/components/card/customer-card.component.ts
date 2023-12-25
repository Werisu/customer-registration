import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '@customer-registration/customer-data-access';

@Component({
  selector: 'customer-registration-customer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.scss',
})
export class CustomerCardComponent {
  @Input({ required: true }) customer!: Customer;
}
