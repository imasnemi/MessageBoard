import { AppComponent } from '../app.component';
import { MessageInputComponent } from '../messages/message-input/message-input.component';
import { UserComponent } from '../users/user/user.component';
import { HashtagAreaComponent } from '../messages/hashtag-area/hashtag-area.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from '../users/users.service';
import { RestService } from './rest.service';
import { ApiConfig } from './config';
import { MessagesService } from '../messages/messages.service';
import { HashtagsPipe } from '../messages/hashtags.pipe';
import { MessageComponent } from '../messages/message/message.component';
import { MessagesComponent } from '../messages/messages.component';
import { WebSocketService } from './web-socket.service';
import { LoginComponent } from '../users/login/login.component';
import { SubscribeComponent } from '../users/subscribe/subscribe.component';
import { FakeRestService } from './fake.rest.service';

export const testModule = {
    declarations: [
      AppComponent,
      MessageInputComponent,
      UserComponent,
      HashtagAreaComponent,
      HashtagsPipe,
      MessageComponent,
      MessagesComponent,
      LoginComponent,
      SubscribeComponent
    ],
    imports: [
      RouterTestingModule.withRoutes([{
        path : '', component: UserComponent
      }]),
      FormsModule,
      HttpClientModule,
      BrowserModule
    ],
    providers: [UsersService,
        {provide: RestService, useClass: FakeRestService},
        ApiConfig,
        MessagesService,
        WebSocketService
    ]
  };
