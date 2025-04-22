import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../domain/course";
import {FilterPipe} from "../../pipes/filter.pipe";
import {OrderbyPipe} from "../../pipes/orderby.pipe";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  providers: [FilterPipe, OrderbyPipe]
})
export class CoursePageComponent implements OnInit  {
  public courses: Course[] = [];
  filteredCourses : Course[] = []; // Отфильтрованный список
  searchTerm = ''; // Текущий поисковый запрос

  constructor(
    private filterPipe: FilterPipe,
    private orderByPipe: OrderbyPipe
  ) {
    this.resetSearch();
  }

  ngOnInit(): void {
    this.courses = [{
        id: 1,
        title: "Быстрый старт по Angular",
        creation_date: new Date(2025, 3, 20),
        duration: 6000,
        description: "Обратите внимание: 98 ч. 15 мин. - это время, которое можно списать на обучение в Учебном центре, в которое входит просмотр лекций и выполнение домашнего задания. Данный курс предполагает трудозатраты на самообучение во внерабочее время сверх указанных 98 ч. 15 мин. для более полного и глубокого понимания тем, а также для заполнения пробелов по требованиям к знаниям слушателей курса.",
        topRated: true,
       },
      {
        id: 2,
        title: "Быстрый старт по Spring Boot",
        creation_date: new Date(2025, 3, 21),
        duration: 4800,
        description: "Название курса: Быстрый старт по Spring Boot",
        topRated: false,
      },
      {
        id: 3,
        title: "Быстрый старт по QPalete",
        creation_date: new Date(2025, 5, 9),
        duration: 1200,
        description: "Быстрый старт по QPalete",
        topRated: true,
      },
      {
        id: 4,
        title: "Быстрый старт по Java",
        creation_date: new Date(2025, 4, 11),
        duration: 1200,
        description: "Быстрый старт по Java",
        topRated: false
      },
      {
        id: 5,
        title: "Быстрый старт разработчика FLEXTERA",
        creation_date: new Date(2025, 4, 25),
        duration: 2400,
        description: "Быстрый старт разарботчика Flextera",
        topRated: true
      },
      {
        id: 6,
        title: "Быстрый старт разарботчика MSA",
        creation_date: new Date(2025, 2, 15),
        duration: 2407,
        description: "Быстрый старт разарботчика MSA",
        topRated: true
      },
      {
        id: 7,
        title: "Быстрый старт разарботчика MSA",
        creation_date: new Date(2025, 1, 15),
        duration: 2402,
        description: "Быстрый старт разарботчика MSA",
        topRated: true
      },
      {
        id: 8,
        title: "Быстрый старт языка GO",
        creation_date: new Date(2025, 6, 21),
        duration: 3601,
        description: "Быстрый старт языка GO",
        topRated: false
      },
      {
        id: 9,
        title: "Быстрый старт языка C++",
        creation_date: new Date(2025, 1, 15),
        duration: 5040,
        description: "Быстрый старт языка C++",
        topRated: true
      },
      {
        id: 10,
        title: "Обучающее видео",
        creation_date: new Date(2025, 11, 10),
        duration: 55,
        description: "Обучающее видео",
        topRated: false
      }];
    // Инициализируем filteredCourses при загрузке
    this.filteredCourses = [...this.courses];

    // Применяем сортировку
    this.applySorting();
  }

  onEdit(course: Course) {
    ;
  }

  onDelete(courseId: number) {
    ;
  }
  load() {
    console.log("Загрузить еще!");
  }
  resetSearch() {
    this.searchTerm = "";
    this.applyFilter();
  }
  // Обработчик поиска из app-search
  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;

    this.applyFilter();
  }

  // Применение фильтра
  applyFilter() {
    console.log("Зашли в applyFilter");
    this.filteredCourses = this.filterPipe.transform(
      this.courses,
      this.searchTerm
    );
    console.log(this.filteredCourses);

    // Сортируем по дате создания
    this.applySorting();
  }

  applySorting(): void {
    this.filteredCourses = this.orderByPipe.transform(
      this.filteredCourses,
      'creation_date',
      'desc'
    );
  }
}
