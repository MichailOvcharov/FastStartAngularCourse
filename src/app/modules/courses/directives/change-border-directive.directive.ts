import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBorderDirective]'
})
export class ChangeBorderDirectiveDirective implements OnInit {
  @Input('appChangeBorderDirective') creationDate!: Date;
  private currentDate = new Date();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    const diffDates = this.differanceDate(this.currentDate, this.creationDate);

    if (this.creationDate < this.currentDate && diffDates <= 14) {
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid green');
    }


    if (this.creationDate > this.currentDate) {
      this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid blue');
    }
  }

  differanceDate(firstDate: Date, secondDate: Date):number {

    const differance = (firstDate.getTime() - secondDate.getTime()) / (60 * 60 * 24 * 1000);
   return differance >= 0 ? Math.floor(differance) : Math.ceil(differance);
 }

}
