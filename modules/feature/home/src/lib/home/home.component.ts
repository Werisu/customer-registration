import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Customers,
  OurCustomersService,
} from '@customer-registration/customer-data-access';
import { Observable } from 'rxjs';
import {
  CustomerCardComponent,
  listStateTrigger,
} from '@customer-registration/customer-ui';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '@customer-registration/register';
import Swal from 'sweetalert2';

@Component({
  selector: 'customer-registration-home',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent, NgbModalModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [listStateTrigger],
})
export class HomeComponent {
  public customers$: Observable<Customers> =
    this.ourCustomersService.getCustomers();
  constructor(
    private ourCustomersService: OurCustomersService,
    private ngbModal: NgbModal
  ) {}

  public openModal() {
    const modal = this.ngbModal.open(RegisterComponent, { size: 'lg' });
    modal.result.then((data) => {
      if (typeof data === 'object') {
        this.ourCustomersService.postCustomer(data).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              text: 'cadastro realizado com sucesso',
              toast: true,
              position: 'bottom',
              timer: 5000,
              showConfirmButton: false,
            });

            this.customers$ = this.ourCustomersService.getCustomers();
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              text: 'houve um erro',
              toast: true,
              position: 'bottom',
              timer: 5000,
              showConfirmButton: false,
            });
          },
        });
      }
    });
  }
}
