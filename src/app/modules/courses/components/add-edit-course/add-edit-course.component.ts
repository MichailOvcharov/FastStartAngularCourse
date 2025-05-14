import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import {Course} from "../../../../domain/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../../../services/courses/courses.service";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditCourseComponent implements OnInit, OnDestroy {
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Course>();
  title = "Новый курс";
  isNewCourse: boolean = true;
  showCourseForm = false;
  numId = 0;
  breadcrumb: string = "";
  courseNew: Omit<Course, 'id'> = {
    title: '',
    description: '',
    duration: 0,
    creation_date: new Date(),
    topRated: true
  };
  course: Course = {
    id: 0,
    title: '',
    description: '',
    duration: 0,
    creation_date: new Date(),
    topRated: true
  };

  sub$ = new Subscription();

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
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
      this.sub$.add((this.coursesService.getCourseById(this.numId )
        .subscribe({
          next: (course) => {
          Object.assign(this.courseNew, course);
          Object.assign(this.course, course);
          console.log(course);
          this.cd.detectChanges();
          },
            error: (err) => console.error('Ошибка:', err)
      }))
      );
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

      const { id, title, creation_date, duration, description, topRated  } = this.course;
      this.courseNew = { ...this.courseNew, title, description, duration, creation_date, topRated };
      this.coursesService.createCourse(this.courseNew).subscribe(() => {
          this.coursesService.getListCourse(15);
        }
      );
    } else if (!this.isNewCourse) {
      console.log(this.course);
      this.coursesService.updateCourse(this.course).subscribe(() => {
          this.coursesService.getListCourse(15);
        }
      );
    }
    this.router.navigate(['courses']);
  }

}
