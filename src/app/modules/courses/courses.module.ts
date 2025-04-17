import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursePageComponent } from './components/course-page/course-page.component';



@NgModule({
  declarations: [
    CourseItemComponent,
    CoursePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
