import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { UserInfoGuard } from '../service/user-info.guard';
import { RoomComponent } from './room/room.component';
import { TransformComponent } from './transform/transform.component';

const MAIN_ROUTES: Routes = [
  { path: '', component: MainComponent, canActivate: [UserInfoGuard] },
  { path: 'room/:id', component: RoomComponent, canActivate: [UserInfoGuard] },
  { path: 'tf', component: TransformComponent },
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)]
})


export class MainRoutingModule { }
