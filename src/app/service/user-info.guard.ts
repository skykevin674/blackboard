import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserInfoGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.userExists) {
      return this.userService.getUserInfo().pipe(
        map(resp => {
          if (!resp.valid) {
            this.router.navigate(['/login']);
          }
          return resp.valid;
        })
      );
    }
    return of(true);
  }
}
