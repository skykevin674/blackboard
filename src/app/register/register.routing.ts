import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';

const REGISTER_ROUTES: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(REGISTER_ROUTES)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
