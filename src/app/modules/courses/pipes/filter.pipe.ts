import { Pipe, PipeTransform } from '@angular/core';
import {Course} from "../../../domain/course";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: Course[], searchTerm: string): any[] {
    if (!courses || !searchTerm) return courses;

    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
