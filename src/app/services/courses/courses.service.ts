import { Injectable } from '@angular/core';
import {Course} from "../../domain/course";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap, throwError} from "rxjs";
import {User} from "../../domain/user";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  password: string = '';
  private readonly coursesUrl = '/courses';
  private errorHandler: any;

  constructor(private readonly httpClient: HttpClient) {
  }

  getListCourse(count: number): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.coursesUrl}?_start=0&_limit=${count}`);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesUrl}/${courseId}`).pipe(
      map(course => this.createCourseModel(course)),
      catchError(error => {
          console.error(`Ошибка загрузки курса: ${courseId}:`, error);
          return throwError(() => new Error('Курс загружен с ошибкой!'));
        }
      ),
    );
  }

  searchCourses(input: string): Observable<Course[]> {
    if (!input.trim()) {
      return of([]);
    }
    const encodedInput = encodeURIComponent(input);
    return this.httpClient.get<Course[]>(
      `${this.coursesUrl}?title_like=${encodedInput}&description_like=${encodedInput}`
    ).pipe(
      tap(results => console.log('Результат поиска:', results)),
      map(courses => courses.filter(c => {
          return c.title.includes(input) || c.description.includes(input);
        }
      )),
      catchError(error => {
        console.error('Ошибка поиска:', error);
        return of([]);
      })
    );
  }

  private createCourseModel(course: any): Course {
    return {
      id: course.id,
      title: course.title,
      creation_date: new Date(course.creation_date),
      duration: course.duration,
      description: course.description,
      topRated: course.topRated
    };
  }

  deleteCourse(courseId: number): Observable<void> {
    console.log("courseId - " + courseId);
    return this.httpClient.delete<void>(`${this.coursesUrl}/${courseId}`).pipe(
      catchError( error => {
        console.error(`Ошибка удаления курса: ${courseId}:`, error);
        return throwError(() => new Error('Курс удален с ошибкой!'));
      }),
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.httpClient.post<Course>(this.coursesUrl, course).pipe(
      catchError(error => {
        console.error(`Ошибка создание курса: ${course}:`, error);
        return throwError(() => new Error('Курс создан с ошибкой!'));
      }),
    )
  }

  updateCourse(course: Course): Observable<Course> {
     if (!course.id) {
      return throwError(() => new Error('ID курса не указан'));
    }
    const url = `${this.coursesUrl}/${course.id}`;
    return this.httpClient.put<Course>(url, course).pipe(
      catchError(error => {
        console.error(`Ошибка создание курса: ${course}:`, error);
        return throwError(() => new Error('Курс обновлен с ошибкой!'));
      }),
    );
  }

}
