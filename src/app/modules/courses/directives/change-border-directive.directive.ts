import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeBorderDirective]'
})
export class ChangeBorderDirectiveDirective implements OnInit {
  @Input('appChangeBorderDirective') creationDate!: Date| string | number;
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

  differanceDate(firstDate: Date, secondDate: Date| string | number):number {
    const differance = (firstDate.getTime() - this.parseDate(secondDate).getTime()) / (60 * 60 * 24 * 1000);
   return differance >= 0 ? Math.floor(differance) : Math.ceil(differance);
 }

  private parseDate(date: Date | string | number): Date {
    // Если это уже Date
    if (date instanceof Date) return date;

    // Если это число (timestamp)
    if (typeof date === 'number') return new Date(date);

    // Если это строка
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      console.warn('Невозможно распарсить дату:', date);
      return new Date(); // Возвращаем текущую дату как fallback
    }
    return parsedDate;
  }

}
