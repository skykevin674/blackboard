import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  imports: [LoginRoutingModule, FormsModule, CookieModule.forRoot()],
  declarations: [LoginComponent]
})
export class LoginModule { }