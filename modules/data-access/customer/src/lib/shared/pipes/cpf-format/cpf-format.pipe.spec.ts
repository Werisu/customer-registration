import { CpfFormatPipe } from './cpf-format.pipe';

describe('CpfFormatPipe', () => {
  let pipe: CpfFormatPipe;

  beforeEach(() => {
    pipe = new CpfFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format CPF correctly', () => {
    const cpfWithoutFormatting = '12345678901';
    const formattedCpf = pipe.transform(cpfWithoutFormatting);
    expect(formattedCpf).toBe('123.456.789-01');
  });

  it('should not format CPF if length is different than 11', () => {
    const cpfTooShort = '12345';
    const cpfFormattedTooShort = pipe.transform(cpfTooShort);
    expect(cpfFormattedTooShort).toBe(cpfTooShort);

    const cpfTooLong = '123456789012345';
    const cpfFormattedTooLong = pipe.transform(cpfTooLong);
    expect(cpfFormattedTooLong).toBe(cpfTooLong);
  });
});
