import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxPaymentCardModule } from './ngx-payment-card/ngx-payment-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    NgxPaymentCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
