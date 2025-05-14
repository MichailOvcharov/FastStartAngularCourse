import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import { EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  userInfo: string = "";
  user = new Subscription();

  private dataSubscription!: Subscription;

  constructor(private readonly authService: AuthService,
              private  router: Router,
              private ref: ChangeDetectorRef,
              ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Вызов ngOnChanges()");
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log(this.isAuthenticated);
    this.user.add(this.authService.getUser().subscribe());
    this.user.add(this.authService.getUserName().pipe(
      tap(user => {
        console.log(user);
        this.fio = user;
        this.ref.markForCheck();
      })
    ).subscribe());

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
    console.log("Вызов ngDoCheck()");
  }

  ngOnDestroy(): void {
    this.user.unsubscribe();
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
