import { Component, OnDestroy, OnInit } from '@angular/core';
import { Api } from '../../service/api';
import { UserService } from '../../service/user.service';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';
import { PushService } from '../../service/push.service';

@Component({
    templateUrl: 'room.component.html',
    styleUrls: ['room.component.scss']
})
export class RoomComponent implements OnDestroy, OnInit {

    private socket: any;
    constructor(private api: Api, private userService: UserService, private push: PushService) {}

    ngOnInit() {
        this.socket = new $WebSocket(`ws://localhost:4970?${this.userService.id}`);
    }

    ngOnDestroy() {
        this.api.quitRoom(this.userService.id).subscribe();
    }

    test() {
        this.push.emit('test', {a: 1});
      }
}
