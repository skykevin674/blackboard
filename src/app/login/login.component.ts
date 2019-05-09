import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm = {
    uername: null, password: null
  };

  constructor(private readonly api: Api, private cookieService: CookieService,
    private userService: UserService, private router: Router) {

  }

  login() {
    this.api.login(this.loginForm).pipe(
      flatMap((resp: any) => {
        if (resp.valid) {
          const now = new Date().getTime();
          const expires = new Date(now + resp.data.expire * 1000);
          this.cookieService.put('token', resp.data.token, {
            path: '/', expires
          });
          this.cookieService.put('ticket', resp.data.ticket, {
            path: '/', expires
          });
          return this.userService.getUserInfo();
        }
        return of(resp);
      })
    ).subscribe((resp: any) => {
      if (resp.valid) {
        this.router.navigate(['/main']);
      }
    });
  }
}
