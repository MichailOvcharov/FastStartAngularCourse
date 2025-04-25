import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {CoreModule} from "../core/core.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    PasswordModule
  ]
})
export class AuthModule { }
