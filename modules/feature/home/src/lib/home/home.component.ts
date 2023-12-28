import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Customers,
  OurCustomersService,
} from '@customer-registration/customer-data-access';
import { Observable } from 'rxjs';
import { CustomerCardComponent } from '@customer-registration/customer-ui';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '@customer-registration/register';

@Component({
  selector: 'customer-registration-home',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent, NgbModalModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public customers$: Observable<Customers> =
    this.ourCustomersService.getCustomers();
  constructor(
    private ourCustomersService: OurCustomersService,
    private ngbModal: NgbModal
  ) {}

  public openModal() {
    this.ngbModal.open(RegisterComponent, { size: 'lg' });
  }
}
