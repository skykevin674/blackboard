import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { $WebSocket } from 'angular2-websocket/angular2-websocket';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  private socket: any;

  private subject = new Subject();
  $onMessage = this.subject.asObservable();

  constructor(private userService: UserService, private router: Router) {
    this.socket = new $WebSocket(`ws://localhost:4970?${this.userService.id}`);

    this.socket.onMessage(
      (msg: MessageEvent) => {
        console.log('onMessage ', msg.data);
        const evt = JSON.parse(msg.data);
        if (evt.type === 'kick') {
          this.socket.close();
          this.router.navigate(['/login']);
          return;
        }
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
