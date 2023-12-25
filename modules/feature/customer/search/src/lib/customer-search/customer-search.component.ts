import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
import { CustomerSearchService } from '@customer-registration/customer-data-access';

@Component({
  selector: 'customer-registration-customer-search',
  standalone: true,
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    FormsModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './customer-search.component.html',
  styleUrl: './customer-search.component.scss',
})
export class CustomerSearchComponent {
  public control = new FormControl('', { nonNullable: true });

  constructor(private customerSearchService: CustomerSearchService) {}
  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length > 0),
      switchMap((term) =>
        this.customerSearchService
          .searchByName(term)
          .pipe(map((c) => c.map((c) => c.name)))
      )
    );
}
