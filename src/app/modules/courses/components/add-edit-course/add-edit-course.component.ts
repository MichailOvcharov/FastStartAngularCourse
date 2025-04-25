import {ChangeDetectionStrategy, Component, Output, EventEmitter} from '@angular/core';
import {Course} from "../../../../domain/course";

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditCourseComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Course>();
  title = "Новый курс";
  showCourseForm = false;
  course: Course = {
    id: 1,
    title: '',
    description: '',
    duration: 0,
    creation_date: new Date(),
    topRated: true
  };

  onCancel() {
    console.log("Отмена операции");
  }

  onSave() {
    console.log("Сохранение операции");
  }

}
