import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective {
  constructor(private el: ElementRef, private render: Renderer2) {
    el.nativeElement.style.color = 'yellow';
    // el.nativeElement.style.size='323px'
    render.setStyle(el.nativeElement, 'color', 'red');
    render.setStyle(el.nativeElement, 'font-size', '32px');
  }
}
