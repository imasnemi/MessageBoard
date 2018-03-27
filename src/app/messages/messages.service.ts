import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RestService } from '../shared/rest.service';

@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  private messagesSubject = new BehaviorSubject<Message[]>([]);
  private messagesObservable = this.messagesSubject.asObservable();

  constructor(private restService: RestService) {
  }

  sendMessage(message): Observable<Message[]> {
    return this.restService.sendMessage(message);
  }

  loadMessages(): void {
    this.restService.loadMessages()
    .subscribe((messages) => {
      if (messages !== this.messages) {
        this.messages = messages;
        this.messagesSubject.next(messages);
      }
    });
  }

  getMessagesObservable() {
   if (!this.messages.length) {
     this.loadMessages();
   }
   return this.messagesObservable;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }
}
