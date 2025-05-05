import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  @Output() loginData = new EventEmitter<{ email: string, password: string }>();
  email: string = '';
  password: string = '';

  constructor(private readonly authService: AuthService,
              private router: Router,) {
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.email || !this.password) {
      return;
    }
    this.loginData.emit({ email:this.email, password:this.password});
    this.authService.login(this.email, this.password);
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/courses');
    }
  }

}
