import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageComponent } from './message/message.component';
import { HashtagAreaComponent } from './hashtag-area/hashtag-area.component';
import { HashtagsPipe } from './hashtags.pipe';
import { MessagesService } from './messages.service';
import { MessageHideDirective } from './message-hide.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MessagesComponent,
    MessageInputComponent,
    MessageComponent,
    HashtagAreaComponent,
    HashtagsPipe,
    MessageHideDirective
  ],
  providers: [MessagesService],
  exports: [MessagesComponent, HashtagAreaComponent, MessageInputComponent]
})
export class MessagesModule { }
