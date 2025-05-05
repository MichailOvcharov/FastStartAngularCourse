import {ChangeDetectionStrategy, Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Course} from "../../../../domain/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../../services/courses/courses.service";

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditCourseComponent implements OnInit {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Course>();
  title = "Новый курс";
  isNewCourse: boolean = true;
  showCourseForm = false;
  numId = 0;
  breadcrumb: string = "";
  course: Course = {
    id: 1,
    title: '',
    description: '',
    duration: 0,
    creation_date: new Date(),
    topRated: true
  };

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private coursesService: CoursesService,
  ) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id);
    console.log(this.activateRoute.snapshot.paramMap);
    const path = this.activateRoute.snapshot.routeConfig?.path;

    if (path === 'new') {
      console.log('Режим создания нового курса');
      this.isNewCourse = true;
    } else if (id) {
      console.log('Режим редактирования курса ID:', id);
      this.numId = Number(id);
      this.title = "Редактирование курса";
      this.course = this.coursesService.getCourseById(this.numId )!;
      console.log(this.coursesService.getCourseById(this.numId ));
      this.isNewCourse = false;
    } else {
      console.log('Некорректный маршрут');
    }
  }

  onCancel() {
    this.router.navigate(['courses']);
  }

  onSave() {
    if (this.isNewCourse) {
      console.log(this.course);
      this.coursesService.createCourse(this.course);
    } else if (!this.isNewCourse) {
      this.coursesService.updateCourse(this.numId , this.course);
    }
    this.router.navigate(['courses']);
  }

}
