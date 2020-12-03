import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPaymentCardComponent } from './ngx-payment-card.component';

describe('NgxPaymentCardComponent', () => {
  let component: NgxPaymentCardComponent;
  let fixture: ComponentFixture<NgxPaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPaymentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
