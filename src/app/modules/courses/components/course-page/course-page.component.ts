import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Course} from "../../../../domain/course";
import {FilterPipe} from "../../pipes/filter.pipe";
import {OrderbyPipe} from "../../pipes/orderby.pipe";
import {CoursesService} from "../../../../services/courses/courses.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {catchError, Observable, of, Subject, Subscription, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [FilterPipe, OrderbyPipe, ConfirmationService, MessageService]
})
export class CoursePageComponent implements OnInit  {
  public courses: Course[] = [];
  filteredCourses : Course[] = [];
  filteredCourses$!: Observable<Course[]>;
  itemsPerPage = 5;
  private destroy$ = new Subject<void>();
  searchTerm = '';
  showCourseForm = false;

  constructor(
    private filterPipe: FilterPipe,
    private orderByPipe: OrderbyPipe,
    private readonly courseService: CoursesService,
    private readonly сonfirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) {
    this.resetSearch();
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.filteredCourses$ = this.courseService.getListCourse(this.itemsPerPage).pipe(
      tap(courses => {
          console.log(courses);
          this.courses = courses;
          this.filteredCourses = courses;
        }
      ),
      catchError(error => {
        console.error('Ошибка загрузки:', error);
        return of([]); // Возвращаем пустой массив при ошибке
      }),
      takeUntil(this.destroy$)
    );
  }

  onEdit(course: Course) {
    this.router.navigateByUrl(`/courses/${course.id}`);
  }

  onDelete(courseId: number) {
    console.log("courseId");
    this.courseService.deleteCourse(courseId)
      .subscribe(()=>{
          this.loadCourses()
        }
      );
  }

  confirmDelete(courseId: number) {
    this.сonfirmationService.confirm({
      message: 'Вы действительно хотите удалить этот курс?',
      accept: () => {
        this.courseService.deleteCourse(courseId).subscribe();
        this.loadCourses();
        this.messageService.add({
          severity: 'success',
          summary: 'Успешно',
          detail: 'Курс удален'
        });
      }
    });
  }

  load() {
    this.itemsPerPage = this.itemsPerPage + 5;
    console.log(this.courses);
    this.loadCourses();
  }

  resetSearch() {
    this.loadCourses();
  }

  onSearch(searchTerm: string) {
    this.filteredCourses$ = this.courseService
      .searchCourses(searchTerm)
      .pipe(
        tap((courses) => {
          this.courses = courses;
          this.filteredCourses = courses;
          console.log(this.filteredCourses.length);
          this.ref.markForCheck();
        })
      );

  }

  onAddCourse() {
    console.log("Добавляем курс2!");
    this.router.navigateByUrl('/courses/new');
  }

  onCancelEdit() {
     console.log("Отмена!");
  }

  onCourseSaved(course: Course) {
    console.log("Сохранение!");
  }

}
