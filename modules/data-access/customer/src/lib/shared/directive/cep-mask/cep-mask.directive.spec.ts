import { CepMaskDirective } from './cep-mask.directive';
import { FormControl } from '@angular/forms';

describe('CepMaskDirective', () => {
  let formControl;

  beforeEach(() => {
    formControl = new FormControl('');
  });

  it('should create an instance', () => {
    const directive = new CepMaskDirective(formControl);
    expect(directive).toBeTruthy();
  });
});
