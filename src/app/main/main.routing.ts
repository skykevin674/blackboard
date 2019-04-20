import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';

const MAIN_ROUTES: Routes = [
  { path: '', component: MainComponent }
]

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)]
})
export class MainRoutingModule { }