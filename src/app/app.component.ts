import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'my-app';
  searchQuery = '';
  isAuthenticated: boolean = false;
  userName = "";

  constructor(private readonly authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.checkAuth()
  }
  onSearch() {
    // console.log("Нажали поиск!");
  }
 /* handleLogin(loginData: { email: string, password: string }) {
    // 1. Вызываем метод сервиса
    this.authService.login(loginData.email, loginData.password);

    // 2. Проверяем аутентификацию
    this.isAuthenticated = this.authService.isAuthenticated();

    console.log("isAuthenticated ="+ this.isAuthenticated);

    // 3. Получаем имя пользователя
    const user = this.authService.getUser();
    // this.userName = user ? `${user.first_name} ${user.last_name}` : '';

    // if (this.authService.isAuthenticated()) {
    //   this.router.navigateByUrl('/courses');
    // }

    console.log('Выполнен вход в систему:', loginData);
  }*/
  handleLogout() {
    this.checkAuth();
  }

  checkAuth() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

}
