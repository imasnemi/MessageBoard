import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Message } from './message';
import { MessagesService } from './messages.service';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { WebSocketService } from '../shared/web-socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, OnDestroy {
  @Output() hashtagFound = new EventEmitter<string[]>();
  messages: Message[] = [];
  missedMessages = 0;
  class: 'shadowed';
  messagesSubscription: Subscription;

  constructor(public messagesService: MessagesService, 
    public webSocketService: WebSocketService) {
  }

  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }

  ngOnInit() {
    this.webSocketService.init();
    this.webSocketService
    .getWebSocketObservable()
    .subscribe((message) => {
      console.log('MessagesComponent :: message', message);
      if (message) {
        this.missedMessages++;
      }
    });
    this.messagesSubscription = this.messagesService
    .getMessagesObservable()
    .subscribe(
      (response) => {
        this.messages = response;
        this.parseHashtags();
      }, (error) => {
        console.error(error);
      });
  }

  parseHashtags() {
    const hashtags = [];

    this.messages.forEach((message) => {
      if (!message.content) {
        return;
      }
      const regex = /#(\w+)/g;
      const matches = message.content.match(regex);
      if (matches) {
        matches.forEach((hashtag) => hashtags.push(hashtag));
      }
    });
    this.hashtagFound.emit(hashtags);
  }

}
