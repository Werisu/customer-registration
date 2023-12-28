import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CepMaskDirective,
  Customer,
  ZipCode,
  ZipCodeService,
} from '@customer-registration/customer-data-access';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, filter, map, switchMap, tap } from 'rxjs';
import { fadeAnimation } from '@customer-registration/customer-ui';

@Component({
  selector: 'customer-registration-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CepMaskDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  animations: [fadeAnimation],
})
export class RegisterComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @Input() customer!: Customer;
  cadastroForm!: FormGroup;
  zipCodeData$!: Observable<ZipCode>;
  subscribeLocalStorage$!: Observable<Customer>;
  isSaveLocalStorage = false;

  constructor(
    private formBuilder: FormBuilder,
    private zipCodeService: ZipCodeService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      // Informações Pessoais
      name: ['', Validators.required],
      cpf: ['', Validators.required],

      // Informações de Contato
      email: ['', [Validators.required, Validators.email]],
      phone: [''],

      // Endereço Residencial
      zipCode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });

    this.searchZipCode();

    this.subscribeLocalStorage$ = this.cadastroForm.valueChanges.pipe(
      tap((data) => {
        this.saveLocalStorage(data);
        this.isSaveLocalStorage = true;
      })
    );

    if (this.customer) {
      this.fillOutForm();
    }
  }

  fillOutForm() {
    this.cadastroForm.controls['name'].setValue(this.customer.name);
    this.cadastroForm.controls['cpf'].setValue(this.customer.cpf);
    this.cadastroForm.controls['email'].setValue(this.customer.email);
    this.cadastroForm.controls['phone'].setValue(this.customer.phone);
    this.cadastroForm.controls['zipCode'].setValue(this.customer.zipCode);
    this.cadastroForm.controls['state'].setValue(this.customer.state);
    this.cadastroForm.controls['city'].setValue(this.customer.city);
    this.cadastroForm.controls['street'].setValue(this.customer.street);
  }

  saveLocalStorage(body: Customer) {
    localStorage.setItem('customer', JSON.stringify(body));
  }

  searchZipCode() {
    this.zipCodeData$ = this.cadastroForm.controls['zipCode'].valueChanges.pipe(
      filter((value) => value.length >= 8),
      map((value) => value.replace('-', '')),
      switchMap((value) => this.zipCodeService.getZipCode(value)),
      tap((data) => {
        this.cadastroForm.controls['state'].setValue(data.uf);
        this.cadastroForm.controls['city'].setValue(data.localidade);
        this.cadastroForm.controls['street'].setValue(data.logradouro);
      })
    );
  }

  submitForm() {
    if (this.cadastroForm.valid) {
      this.activeModal.close(this.cadastroForm.value);
    }
  }
}
