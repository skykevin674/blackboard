import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  private socket: any;

  private subject = new Subject();
  $onMessage = this.subject.asObservable();

  constructor(private userService: UserService) {
    console.log('init');
    this.socket = new $WebSocket(`ws://localhost:4970?${this.userService.id}`);

    this.socket.onMessage(
      (msg: MessageEvent) => {
        console.log('onMessage ', msg.data);
        const evt = JSON.parse(msg.data);
        this.subject.next(evt);
      },
      { autoApply: false }
    );
  }

  emit(event: string, data: any) {
    this.socket.send(JSON.stringify({
      event, data
    })).subscribe();
  }
}
