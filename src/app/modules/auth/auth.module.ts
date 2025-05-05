import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {CoreModule} from "../core/core.module";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import {AuthRoutingModule} from "./auth-routing.module";

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
    PasswordModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
