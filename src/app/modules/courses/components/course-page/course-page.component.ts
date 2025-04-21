import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../domain/course";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit  {
  public courses: Course[] = [];
  ngOnInit(): void {
    this.courses = [{
        id: 1,
        title: "Быстрый старт по Angular",
        creation_date: new Date(2019, 3, 20),
        duration: 6000,
        description: "Обратите внимание: 98 ч. 15 мин. - это время, которое можно списать на обучение в Учебном центре, в которое входит просмотр лекций и выполнение домашнего задания. Данный курс предполагает трудозатраты на самообучение во внерабочее время сверх указанных 98 ч. 15 мин. для более полного и глубокого понимания тем, а также для заполнения пробелов по требованиям к знаниям слушателей курса."
       },
      {
        id: 2,
        title: "Быстрый старт по Spring Boot",
        creation_date: new Date(2019, 3, 20),
        duration: 4800,
        description: "Название курса: Быстрый старт по Spring Boot"
      },
      {
        id: 3,
        title: "Быстрый старт по QPalete",
        creation_date: new Date(2020, 5, 25),
        duration: 1200,
        description: "Быстрый старт по QPalete"
      },
      {
        id: 4,
        title: "Быстрый старт по Java",
        creation_date: new Date(2021, 4, 15),
        duration: 1200,
        description: "Быстрый старт по Java"
      },
      {
        id: 5,
        title: "Быстрый старт разработчика FLEXTERA",
        creation_date: new Date(2022, 4, 15),
        duration: 2400,
        description: "Быстрый старт разарботчика Flextera"
      },
      {
        id: 6,
        title: "Быстрый старт разарботчика MSA",
        creation_date: new Date(2021, 4, 15),
        duration: 2400,
        description: "Быстрый старт разарботчика MSA"
      },
      {
        id: 7,
        title: "Быстрый старт разарботчика MSA",
        creation_date: new Date(2021, 4, 15),
        duration: 2400,
        description: "Быстрый старт разарботчика MSA"
      },
      {
        id: 8,
        title: "Быстрый старт языка GO",
        creation_date: new Date(2021, 6, 21),
        duration: 3600,
        description: "Быстрый старт языка GO"
      },
      {
        id: 9,
        title: "Быстрый старт языка C++",
        creation_date: new Date(2022, 8, 15),
        duration: 4800,
        description: "Быстрый старт языка C++"
      },
      {
        id: 10,
        title: "Обучающее видео",
        creation_date: new Date(2023, 11, 10),
        duration: 120,
        description: "Обучающее видео"
      }];

  }

  onEdit(course: Course) {
    ;
  }

  onDelete(courseId: number) {
    ;
  }
}
