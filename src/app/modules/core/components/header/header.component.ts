import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import { EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
{
  @Output() logout = new EventEmitter<void>();
  @Output() loginData = new EventEmitter<{ email: string, password: string }>();
  @Input() authenticated: boolean = true;
  login: string | null | undefined;
  isAuthenticated : boolean = true;
  fio: string = "";
  constructor(private readonly authService: AuthService,
              private  router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Вызов ngOnChanges()");
  }

  ngOnInit(): void {
    this.login = this.authService.getUserInfo();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.fio = this.authService.getUserName();
    console.log(this.login);
    console.log(this.authService.getUserName());
    console.log("Вызов ngOnInit()");
  }

  ngAfterContentChecked(): void {
    console.log("Вызов ngAfterContentChecked()");
  }

  ngAfterContentInit(): void {
    console.log("Вызов ngAfterContentInit()");
  }

  ngAfterViewChecked(): void {
    console.log("Вызов ngAfterViewChecked()");
  }

  ngAfterViewInit(): void {
    console.log("Вызов ngAfterViewInit()");
  }

  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.fio = this.authService.getUserName();
    console.log(this.isAuthenticated);
    console.log("Вызов ngDoCheck()");
  }

  ngOnDestroy(): void {
    console.log("Вызов ngOnDestroy()");
  }
 public onExit():void
 {
   this.authService.logout();
   this.logout.emit();
   this.isAuthenticated = false;
   console.log("Выход " + this.login);
 }

}
