import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestService } from './rest.service';
import { ApiConfig } from './config';
import { WebSocketService } from './web-socket.service';
import { TokenInterceptor } from './token.interceptor';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [RestService, ApiConfig, WebSocketService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class SharedModule { }
