import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class Api {
  constructor(private http: HttpClient) { }

  register(param: any) {
    return this.http.post(`${environment.api_url}/user/register`, param);
  }

  login(param: any) {
    return this.http.post(`${environment.api_url}/user/login`, param);
  }

  test() {
    return this.http.get(`${environment.api_url}/hello/5`);
  }
}
