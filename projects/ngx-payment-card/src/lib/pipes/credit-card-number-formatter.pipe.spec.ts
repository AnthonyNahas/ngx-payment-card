import { CreditCardNumberFormatterPipe } from './credit-card-number-formatter.pipe';

describe('CreditCardNumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardNumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
