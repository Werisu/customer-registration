import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'customer-registration-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  activeModal = inject(NgbActiveModal);
  @Input() name!: string;
  cadastroForm!: FormGroup;
  // TODO: pesquisar o objecto
  // zipCodeData: any;

  constructor(private formBuilder: FormBuilder) {}

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

    this.cadastroForm.controls['zipCode'].valueChanges.pipe();
  }

  submitForm() {
    if (this.cadastroForm.valid) {
      this.activeModal.close(this.cadastroForm.value);
    }
  }
}
