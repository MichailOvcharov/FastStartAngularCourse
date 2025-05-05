import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, DatePipe, registerLocaleData} from '@angular/common';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import {CoreModule} from "../core/core.module";
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ButtonModule } from 'primeng/button';
import { ChangeBorderDirectiveDirective } from './directives/change-border-directive.directive';
import { DurationPipe } from './pipes/duration.pipe';
import localeRu from "@angular/common/locales/ru";
import localeRuExtra from '@angular/common/locales/extra/ru';
import { OrderbyPipe } from './pipes/orderby.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddEditCourseComponent } from './components/add-edit-course/add-edit-course.component';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { AuthorsComponent } from './components/authors/authors.component';
import {InputNumberModule} from "primeng/inputnumber";
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

registerLocaleData(localeRu, 'ru', localeRuExtra);

@NgModule({
  declarations: [
    CourseItemComponent,
    CoursePageComponent,
    AddButtonComponent,
    ChangeBorderDirectiveDirective,
    DurationPipe,
    OrderbyPipe,
    FilterPipe,
    AddEditCourseComponent,
    DurationInputComponent,
    AuthorsComponent,
    CoursesComponent
  ],
  exports: [
    CoursePageComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ButtonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule,
    InputNumberModule,
    CoursesRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    ConfirmationService,
    DatePipe
  ],
})
export class CoursesModule { }
