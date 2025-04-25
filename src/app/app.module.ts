import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import {CoursesModule} from "./modules/courses/courses.module";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {DatePipe} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {ChangeBorderDirectiveDirective} from "./modules/courses/directives/change-border-directive.directive";
import {DurationPipe} from "./modules/courses/pipes/duration.pipe";
import {OrderbyPipe} from "./modules/courses/pipes/orderby.pipe";
import {FilterPipe} from "./modules/courses/pipes/filter.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./modules/auth/auth.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    FormsModule,
    ButtonModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
