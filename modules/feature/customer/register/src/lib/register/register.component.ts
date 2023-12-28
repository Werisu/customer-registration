import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CepMaskDirective,
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

@Component({
  selector: 'customer-registration-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CepMaskDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @Input() name!: string;
  cadastroForm!: FormGroup;
  zipCodeData$!: Observable<ZipCode>;

  constructor(
    private formBuilder: FormBuilder,
    private zipCodeService: ZipCodeService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      // Informações Pessoais
      name: ['', Validators.required],
      birthDate: ['', Validators.required],

      // Informações de Contato
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],

      // Endereço Residencial
      zipCode: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });

    this.searchZipCode();
  }

  searchZipCode() {
    this.zipCodeData$ = this.cadastroForm.controls['zipCode'].valueChanges.pipe(
      filter((value) => value.length > 5),
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
