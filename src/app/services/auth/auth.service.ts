import { Injectable } from '@angular/core';
import {User} from "../../domain/user";
import {AuthData} from "../../domain/auth-data";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly token = 'token';
  email: string = '';
  password: string = '';
  private readonly userUrl = '/users';

  constructor(private router: Router, private http: HttpClient) {

  }

  login(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}?email=${email}&password=${password}`).pipe(
      tap(users => {
        if (users.length > 0) {
          const token = users[0].token;
          if (!token) {
            throw new Error('Токен не найден');
          }
          localStorage.setItem(this.token, token);
        } else {
          throw new Error('Пользователь не найден!');
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.token);
    this.router.navigateByUrl('/login');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.token);
  }

  getUserInfo(): Observable<string> {
    const token = localStorage.getItem(this.token);
    if (!token) {
      throw new Error('No token found');
    }
    return this.http.get<User[]>(`${this.userUrl}?token=${token}`).pipe(
      map(users => {
        const user = users[0];
        if (!user) throw new Error('Пользователь не найден!');
        return user.email;
      })
    );
  }

  getToken(): string | null {
    const data = localStorage.getItem(this.token);
    return data ? data : null;
  }

  getUserName(): Observable<string> {
    const token = localStorage.getItem(this.token);
    console.log(token);
    console.log(`${this.userUrl}?token=${token}`);
    if (!token) {
      throw new Error('Нет пользователя!');
    }
    return this.http.get<User[]>(`${this.userUrl}?token=${token}`).pipe(
      map(users => {
        const user = users[0];
        console.log("user - " + user);
        if (!user) throw new Error('Пользователь не найден!');
        console.log(`${user.first_name} ${user.last_name}`);
        return user ? `${user.first_name} ${user.last_name}` : 'Гость';
      })
    );
  }

  public getUser(): Observable<User> {
    const token = localStorage.getItem(this.token);
    if (!token) {
      throw new Error('Нет пользователя!');
    }
    return this.http.get<User[]>(`${this.userUrl}?token=${token}`).pipe(
      map(users => {
        const user = users[0];
        if (!user) throw new Error('Пользователь не найден!');
        return user;
      })
    );
  }

}
