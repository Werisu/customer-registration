import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '@customer-registration/customer-data-access';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'customer-registration-customer-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.scss',
})
export class CustomerCardComponent {
  @Input({ required: true }) customer!: Customer;
}
