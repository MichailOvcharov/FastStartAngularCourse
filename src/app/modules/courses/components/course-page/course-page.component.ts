import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../domain/course";
import {FilterPipe} from "../../pipes/filter.pipe";
import {OrderbyPipe} from "../../pipes/orderby.pipe";
import {CoursesService} from "../../../../services/courses/courses.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [FilterPipe, OrderbyPipe, ConfirmationService, MessageService]
})
export class CoursePageComponent implements OnInit  {
  public courses: Course[] = [];
  filteredCourses : Course[] = []; // Отфильтрованный список
  searchTerm = ''; // Текущий поисковый запрос
  showCourseForm = false;

  constructor(
    private filterPipe: FilterPipe,
    private orderByPipe: OrderbyPipe,
    private readonly courseService: CoursesService,
    private readonly сonfirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private router: Router
  ) {
    this.resetSearch();
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courses = this.courseService.getListCourse();
    this.filteredCourses = [...this.courses];
    this.applySorting();
  }

  onEdit(course: Course) {
    this.router.navigateByUrl(`/courses/${course.id}`);
  }

  onDelete(courseId: number) {
    console.log("courseId");
    this.courseService.deleteCourse(courseId);
    this.courses = this.courseService.getListCourse();
    this.filteredCourses = this.courses;
  }

  confirmDelete(courseId: number) {
    this.сonfirmationService.confirm({
      message: 'Вы действительно хотите удалить этот курс?',
      accept: () => {
        this.courseService.deleteCourse(courseId);
        this.loadCourses(); // Перезагружаем список
        this.messageService.add({
          severity: 'success',
          summary: 'Успешно',
          detail: 'Курс удален'
        });
      }
    });
  }

  load() {
    console.log("Загрузить еще!");
  }
  resetSearch() {
    this.searchTerm = "";
    this.applyFilter();
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.applyFilter();
  }


  applyFilter() {
    this.filteredCourses = this.filterPipe.transform(
      this.courses,
      this.searchTerm
    );

    this.applySorting();
  }

  applySorting(): void {
    this.filteredCourses = this.orderByPipe.transform(
      this.filteredCourses,
      'creation_date',
      'desc'
    );
  }

  onAddCourse() {
    // this.showCourseForm = true;
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
