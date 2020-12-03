import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';


@Component({
  selector: 'ngx-payment-card',
  templateUrl: './ngx-payment-card.component.html',
  styleUrls: ['./ngx-payment-card.component.scss']
})
export class NgxPaymentCardComponent implements OnInit, OnDestroy {


  @Input()
  IBAN!: string;

  @Input()
  name!: string;

  @Input()
  expirationDate!: Date;

  @Input()
  securityCode!: number;

  @Input()
  cardNumber!: number;

  @Input()
    // tslint:disable-next-line:variable-name
  IBAN_Text = 'IBAN';

  @Input()
  nameText = 'Name';

  @Input()
  expirationText = 'expiration';

  @Input()
  securityCodeText = 'security code';

  @Input()
  cardNumberText = 'Nr. ';

  onFocus: EventEmitter<boolean> = new EventEmitter<boolean>();
  flipped!: boolean;


  // Private
  // tslint:disable-next-line:variable-name
  private _unsubscribeAll: Subject<any>;

  // https://codepen.io/quinlo/pen/YONMEa

  constructor(private formBuilder: FormBuilder,
              private matSnackBar: MatSnackBar,
              private ref: ChangeDetectorRef) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  flip(flip: boolean): void {
    this.flipped = flip;
  }

  onFocusRequested(flip: boolean): void {
    console.log('on focus requested');
    this.onFocus.emit(flip);
  }
}
