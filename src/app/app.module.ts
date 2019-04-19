import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Api } from './service/api';
import { EncryptInterceptor as EncryptInterceptor } from './service/encrypt.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [
    Api,
    { provide: HTTP_INTERCEPTORS, useClass: EncryptInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
