import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  OperatorFunction,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  Customer,
  CustomerSearchService,
} from '@customer-registration/customer-data-access';
import { Router } from '@angular/router';

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
  public control = new FormControl({ id: '' }, { nonNullable: true });

  searching = false;
  searchFailed = false;

  constructor(
    private customerSearchService: CustomerSearchService,
    private route: Router
  ) {}
  search: OperatorFunction<string, readonly Customer[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      filter((term) => term.length > 0),
      switchMap((term) =>
        this.customerSearchService.searchByName(term).pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
      ),
      tap(() => (this.searching = false))
    );
  formatter = (x: { name: string }) => x.name;

  ir() {
    this.route.navigate(['/customer', this.control.value.id]);
  }
}
