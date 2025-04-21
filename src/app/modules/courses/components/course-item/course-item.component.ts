import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../../../../domain/course";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  providers: [DatePipe]
})
export class CourseItemComponent {
  @Input() public course: Course = {} as Course;
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() public edit:   EventEmitter<Course> = new EventEmitter<Course>();
  creationDate: Date = new Date('2023-03-18');

  public onEdit(): void {
    this.edit.emit(this.course );
    console.log("Id курса: " + this.course.id);
    console.log("Заголовок курса: " + this.course.title);
    console.log("Описание курса: " + this.course.description);
  }

  public onDelete(): void {
    this.delete.emit(this.course.id);
    console.log("Id курса " + this.course.id);
  }

  getFormattedDate(date: Date): string {
    return new Intl.DateTimeFormat('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date)
  }

  formatDuration(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Склонение можно улучшить (час/часа/часов)
    return `${hours} час ${minutes} минуты`;
  }
}
