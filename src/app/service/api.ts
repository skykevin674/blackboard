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

  getUser(ticket: string) {
    return this.http.get(`${environment.api_url}/user/get/${encodeURIComponent(ticket)}`);
  }

  createRoom(userId: number) {
    return this.http.post(`${environment.api_url}/room/create`, {id: userId});
  }
  quitRoom(userId: number) {
    return this.http.post(`${environment.api_url}/room/quit`, {id: userId});
  }
  joinRoom(roomId: string, userId: number) {
    return this.http.post(`${environment.api_url}/room/join`, {roomId, id: userId});
  }
  queryRooms() {
    return this.http.get(`${environment.api_url}/room/query`);
  }

  test(channel: string) {
    return this.http.get(`${environment.api_url}/room/test/${channel}`);
  }
}
