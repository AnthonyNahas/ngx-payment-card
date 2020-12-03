import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    NgxPaymentCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxPaymentCardModule { }
