import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxPaymentCardComponent } from './ngx-payment-card.component';

describe('NgxCreditCardComponent', () => {
  let component: NgxPaymentCardComponent;
  let fixture: ComponentFixture<NgxPaymentCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPaymentCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
