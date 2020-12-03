import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlipCardOnClickDirective } from './directives/flip-card-on-click.directive';
import { NgxPaymentCardComponent } from './ngx-payment-card.component';
import { CreditCardNumberFormatterPipe } from './pipes/credit-card-number-formatter.pipe';


@NgModule({
  declarations: [
    NgxPaymentCardComponent,
    CreditCardNumberFormatterPipe,
    FlipCardOnClickDirective
  ],
  exports: [
    NgxPaymentCardComponent,
    CreditCardNumberFormatterPipe,
    FlipCardOnClickDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NgxPaymentCardModule {
}
