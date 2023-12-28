import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { CustomerCardComponent } from '@customer-registration/customer-ui';
import { CpfFormatPipe } from '@customer-registration/customer-data-access';
import {
  Customer,
  CustomerSearchService,
} from '@customer-registration/customer-data-access';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '@customer-registration/register';

function getParamId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}

@Component({
  selector: 'customer-registration-customer-detail',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent, CpfFormatPipe],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss',
})
export class CustomerDetailComponent {
  public customer$: Observable<Customer> = getParamId().pipe(
    switchMap((id) => this.customerSearchService.getById(id))
  );
  constructor(
    private customerSearchService: CustomerSearchService,
    private modalService: NgbModal
  ) {}

  onDelete(id: string) {
    Swal.fire({
      title: 'Excluir cliente',
      text: 'Tem certeza que deseja excluir o cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir',
    }).then((result) => {
      if (result.isConfirmed) {
        this.customer$ = this.customer$.pipe(
          tap(this.customerSearchService.deleteById(id))
        );
      }
    });
  }

  onEdit(id: string, customer: Customer) {
    const modal = this.modalService.open(RegisterComponent, {
      size: 'lg',
    });
    modal.componentInstance.customer = customer;
    modal.result.then((result) => {
      this.customer$ = this.customerSearchService.updateById(id, result);
    });
  }
}
