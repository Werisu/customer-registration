import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat',
  standalone: true,
})
export class CpfFormatPipe implements PipeTransform {
  transform(cpf: string, size: number): string {
    // Lógica para adicionar pontos ao CPF
    // Por exemplo, considerando um CPF no formato "12345678901"
    if (size === 11)
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
  }
}
