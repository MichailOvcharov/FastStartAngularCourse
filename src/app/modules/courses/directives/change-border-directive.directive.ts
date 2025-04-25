import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBorderDirective]'
})
export class ChangeBorderDirectiveDirective implements OnInit {
  @Input('appChangeBorderDirective') creationDate: Date | undefined;
  private currentDate = new Date();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    const diffDates = this.differanceDate(this.currentDate, this.creationDate);
    // @ts-ignore
    if (this.creationDate < this.currentDate && diffDates <= 14) {
    // @ts-ignore
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid green');
    }

    // @ts-ignore
    if (this.creationDate > this.currentDate) {
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid blue');
    }
  }

  differanceDate(firstDate: Date, secondDate: Date | undefined):number {
   // @ts-ignore
    const differance = (firstDate.getTime() - secondDate.getTime()) / (60 * 60 * 24 * 1000);
   return differance >= 0 ? Math.floor(differance) : Math.ceil(differance);
 }

}
