import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appFlipCardOnClick]'
})
export class FlipCardOnClickDirective implements OnInit, OnChanges, OnDestroy {

  // @Input()
  flipped!: boolean;

  @Input()
  onFocus!: EventEmitter<boolean>;

  // Private
  // tslint:disable-next-line:variable-name
  private _unsubscribeAll: Subject<any> = new Subject();

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
    // Set the private defaults
  }

  @HostListener('click') onMouseOver(): void {
    console.log('on click');
    this.handleFlip();
  }

  ngOnInit(): void {
    if (this.onFocus) {
      this.onFocus.pipe(takeUntil(this._unsubscribeAll)).subscribe(flip => {
        this.flipped = !flip;
        this.handleFlip();
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes on flip card', changes);
    if (changes.flipped && !changes.flipped.firstChange) {
      // this.handleFlip();
    }
  }

  handleFlip(): void {
    if (!this.flipped) {
      this.renderer.addClass(this.elementRef.nativeElement, 'flipped');
      // this.renderer.addClass(this.elementRef.nativeElement, 'x');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'flipped');
    }
    this.flipped = !this.flipped;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
