import {Component, EventEmitter, Output} from '@angular/core';
import {Course} from "../../../../domain/course";

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent {
  @Output() add = new EventEmitter<Course>();


  public onAddCourse(): void {
    const newCourse: Course = {
      id: 1,
      title: 'Новый курс',
      description: '',
      duration: 0,
      creation_date: new Date(),
      topRated: true
    };
    this.add.emit(newCourse);
    console.log("Добавляем курс!");
  }
}
