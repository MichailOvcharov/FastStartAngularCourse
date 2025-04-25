import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(minutes: number): string {
    if (isNaN(minutes)) return '';

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    const hoursStr = this.getHoursString(hours);
    const minsStr = this.getMinutesString(mins);

    if (hours > 0 && mins > 0) {
      return `${hours} ${hoursStr} ${mins} ${minsStr}`;
    } else if (hours > 0) {
      return `${hours} ${hoursStr}`;
    } else {
      return `${mins} ${minsStr}`;
    }
  }

  private getHoursString(hours: number): string {
    if (hours % 100 >= 11 && hours % 100 <= 14) {
      return 'часов';
    }
    switch (hours % 10) {
      case 1: return 'час';
      case 2:
      case 3:
      case 4: return 'часа';
      default: return 'часов';
    }
  }

  private getMinutesString(mins: number): string {
    if (mins % 100 >= 11 && mins % 100 <= 14) {
      return 'минут';
    }
    switch (mins % 10) {
      case 1: return 'минута';
      case 2:
      case 3:
      case 4: return 'минуты';
      default: return 'минут';
    }
  }
}
