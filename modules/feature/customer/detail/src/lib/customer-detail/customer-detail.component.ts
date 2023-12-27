import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { CustomerCardComponent } from '@customer-registration/customer-ui';
import { CpfFormatPipe } from '@customer-registration/customer-data-access';
import {
  Customer,
  CustomerSearchService,
} from '@customer-registration/customer-data-access';

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
  constructor(private customerSearchService: CustomerSearchService) {}
}
