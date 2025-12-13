import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {
  elementRef = inject(ElementRef)
  renderer = inject(Renderer2)

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
