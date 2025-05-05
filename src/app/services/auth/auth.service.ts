import { Injectable } from '@angular/core';
import {User} from "../../domain/user";
import {AuthData} from "../../domain/auth-data";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly token = 'token';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {

  }

  private user: User = {
    id: 1,
    first_name: 'Овчаров',
    last_name: 'Михаил',
    email: this.email
  };

  login(userEmail: string, password: string): void {
    const user: User = {
      id: 1,
      first_name: 'Михаил',
      last_name: 'Овчаров',
      email: userEmail
    };

    const authData = { user, password};
    localStorage.setItem(this.token, JSON.stringify(authData));
    console.log('Saved to localStorage:', {
      key: this.token,
      value: user
    });
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.token);
  }

  getUserInfo(): string | null {
    const data = localStorage.getItem(this.token);
    return data ? JSON.parse(data).user.email : null;
  }

  getToken(): string | null {
    const data = localStorage.getItem(this.token);
    return data ? JSON.parse(data).token : null;
  }

  getUserName(): string {
    const user = this.getUser();
    console.log("user " + user);
    console.log("user " + user?.email + " " + user?.first_name + " " + user?.first_name);
    return user ? `${user.first_name} ${user.last_name}` : 'Гость';
  }

  public getUser(): User | null {
    const data = localStorage.getItem(this.token);
    return data ? JSON.parse(data).user : null;
  }
}
