import { Component, OnInit } from "@angular/core";
import { Api } from '../service/api';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent {

  loginForm = {
    uername: null, password: null
  }

  constructor(private readonly api: Api, private cookieService: CookieService) {

  }

  login() {
    this.api.login(this.loginForm).subscribe((resp: any) => {
      if (resp.valid) {
        const now = new Date().getTime();
        const expires = new Date(now + resp.data.expire * 1000);
        this.cookieService.put('token', resp.data.token, {
          path: '/', expires
        })
      }
    });
  }
}
