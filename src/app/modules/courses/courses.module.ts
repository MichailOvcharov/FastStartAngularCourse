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

registerLocaleData(localeRu, 'ru', localeRuExtra);

@NgModule({
  declarations: [
    CourseItemComponent,
    CoursePageComponent,
    AddButtonComponent,
    ChangeBorderDirectiveDirective,
    DurationPipe,
    OrderbyPipe,
    FilterPipe
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
