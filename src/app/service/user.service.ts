import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Api } from './api';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: any;

  get userExists() {
    return !!this._user;
  }

  set user(u: any) {
    this._user = u;
  }

  get id() {
    if (this._user) {
      return this._user.id;
    }
    return null;
  }

  getUserInfo(): Observable<any> {
    const ticket = this.cookieService.get('ticket');
    if (ticket) {
      return this.api.getUser(ticket).pipe(
        map((resp: any) => {
          if (resp.valid) {
            this._user = resp.user;
          }
          return resp;
        })
      );
    }
    return of({valid: false, info: 'ticket不存在'});
  }

  constructor(private cookieService: CookieService, private api: Api) { }
}
