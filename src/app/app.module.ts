import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxPaymentCardModule } from 'ngx-payment-card';
import { AppComponent } from './app.component';
import {NgxPaymentCardModule} from "../../projects/ngx-payment-card/src/lib/ngx-payment-card.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    // NgxPaymentCardModule,
    NgxPaymentCardModule,
    FlexModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
