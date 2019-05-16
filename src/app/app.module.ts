import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api } from './service/api';
import { EncryptInterceptor } from './service/encrypt.interceptor';
import { JwtInterceptor } from './service/jwt.interceptor';
import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './service/auth.interceptor';
import { UserService } from './service/user.service';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule, HttpClientModule, CookieModule.forRoot(), NgZorroAntdModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [
    Api,
    { provide: HTTP_INTERCEPTORS, useClass: EncryptInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UserService,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
