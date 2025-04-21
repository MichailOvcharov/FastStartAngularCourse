import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import {CoreModule} from "../core/core.module";
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CourseItemComponent,
    CoursePageComponent,
    AddButtonComponent
  ],
  exports: [
    CoursePageComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ButtonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    DatePipe
  ],
})
export class CoursesModule { }
