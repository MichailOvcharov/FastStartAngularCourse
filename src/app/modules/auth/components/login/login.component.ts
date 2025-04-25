import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";

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

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginData.emit({ email:this.email, password:this.password});
    this.authService.login(this.email, this.password);
    console.log("Выполнен вход в систему.");
  }

}
