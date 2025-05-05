import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(
    array: any[],
    field: string,
    direction: 'asc' | 'desc' = 'asc',
    compareFn?: (a: any, b: any) => number
  ): any[] {
    if (!array || !Array.isArray(array)) return array;

    const directionModifier = direction === 'asc' ? 1 : -1;

    return [...array].sort((a, b) => {
      if (compareFn) {
        return compareFn(a, b) * directionModifier;
      }

      // Автоматическое сравнение для примитивов и объектов
      const valueA = field ? this.resolveField(a, field) : a;
      const valueB = field ? this.resolveField(b, field) : b;

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB) * directionModifier;
      }

      return (valueA > valueB ? 1 : -1) * directionModifier;
    });
  }

  private resolveField(obj: any, path: string): any {
    return path.split('.').reduce((o, p) => o?.[p], obj);
  }

}
