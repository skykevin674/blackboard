import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';
import { UserInfoGuard } from '../service/user-info.guard';
import { RoomComponent } from './room/room.component';
import { CommonModule } from '@angular/common';
import { PushService } from '../service/push.service';


@NgModule({
  imports: [MainRoutingModule, CommonModule],
declarations: [MainComponent, RoomComponent],
  providers: [UserInfoGuard, PushService]
})
export class MainModule { }
