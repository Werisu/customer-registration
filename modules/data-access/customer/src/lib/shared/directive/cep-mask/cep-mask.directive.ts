import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[customerRegistrationCepMask]',
  standalone: true,
})
export class CepMaskDirective {
  constructor(private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    if (this.ngControl.control) {
      // Remove caracteres não numéricos
      const cleanValue = value.replace(/[^0-9]/g, '');

      // Aplica a máscara (formato: XXXXX-XXX)
      const maskedValue = cleanValue.replace(/^(\d{5})(\d{3})$/, '$1-$2');

      // Atualiza o valor no controle do formulário
      this.ngControl.control.setValue(maskedValue, { emitEvent: false });
    }
  }
}
