import { NgModule } from '@angular/core';
import {CoursePageComponent} from "./components/course-page/course-page.component";
import {RouterModule, Routes} from "@angular/router";
import {AddEditCourseComponent} from "./components/add-edit-course/add-edit-course.component";
import {CoursesComponent} from "./courses.component";
import {AuthGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'courses',  component: CoursesComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CoursePageComponent,
      },
      {
        path: 'new',
        component: AddEditCourseComponent,
      },
      {
        path: ':id',
        component: AddEditCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class CoursesRoutingModule { }
