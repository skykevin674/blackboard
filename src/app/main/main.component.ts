import { Component, OnInit } from '@angular/core';
import { Api } from '../service/api';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { PushService } from '../service/push.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  rooms: any[];

  constructor(private api: Api, private userService: UserService, private router: Router, private push: PushService) {

  }

  ngOnInit() {
    this.api.queryRooms().subscribe((resp: any) => {
      if (resp.valid) {
        this.rooms = resp.data;
      }
    });
  }

  // disconnect() {
  //   this.socket.close();
  // }

  create() {
    this.api.createRoom(this.userService.id).subscribe((resp: any) => {
      if (resp.valid) {
        this.router.navigate(['/main/room', resp.data]);
      }
    });
  }

  join(roomId: string) {
    this.api.joinRoom(roomId, this.userService.id).subscribe((resp: any) => {
      if (resp.valid) {
        this.router.navigate(['/main/room', resp.data]);
      }
    });
  }

  test() {
    // this.api.test(Math.random() > 0.5 ? 'c1' : 'c2').subscribe();
    // this.socket.send(JSON.stringify({
    //   event: 'test',
    //   data: {a: 1},
    // })).subscribe();
  }
}
