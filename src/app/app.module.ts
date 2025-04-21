import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import {CoursesModule} from "./modules/courses/courses.module";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {DatePipe} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    FormsModule,
    ButtonModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
