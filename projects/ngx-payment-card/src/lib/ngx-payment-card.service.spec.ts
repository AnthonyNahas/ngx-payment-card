import { TestBed } from '@angular/core/testing';

import { NgxPaymentCardService } from './ngx-payment-card.service';

describe('NgxPaymentCardService', () => {
  let service: NgxPaymentCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPaymentCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
