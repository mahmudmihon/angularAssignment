import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[CardSize]'
})
export class CardSizeDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.width = '700px';
   }

}
