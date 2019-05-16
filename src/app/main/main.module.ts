import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';
import { UserInfoGuard } from '../service/user-info.guard';
import { RoomComponent } from './room/room.component';
import { CommonModule } from '@angular/common';
import { PushService } from '../service/push.service';
import { TransformComponent } from './transform/transform.component';
import { CarouselModule } from './transform/carousel/carousel.module';
import { WizardModule } from 'wizard';


@NgModule({
  imports: [MainRoutingModule, CommonModule, CarouselModule, WizardModule],
  declarations: [MainComponent, RoomComponent, TransformComponent],
  providers: [UserInfoGuard, PushService]
})
export class MainModule { }
