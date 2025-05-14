import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscribable, Subscriber, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() loginData = new EventEmitter<{ email: string, password: string }>();
  email: string = '';
  password: string = '';
  doLogin: Subscription = Subscription.EMPTY;

  constructor(private readonly authService: AuthService,
              private router: Router,) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.doLogin) {
      this.doLogin.unsubscribe();
    }
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginData.emit({ email:this.email, password:this.password});
    this.doLogin = this.authService.login(this.email, this.password).pipe(
      tap(() => {
        if (this.authService.isAuthenticated()) {
          this.router.navigateByUrl('/courses');
        }
      })
    ).subscribe();
  }

}
