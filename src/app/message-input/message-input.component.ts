import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages/messages.service';
import { Message, MessageType } from '../messages/message';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  message = {
    author: '',
    content: '',
    date: '',
    type: MessageType.TEXT
  };

  constructor(public messagesService: MessagesService) {
  }

  ngOnInit() {
  }

  onSend() {
    this.message['date'] = new Date().toDateString();
    this.message['url'] = this.message['url'] || '';
    if (this.message['url'].includes('youtube.com')) {
      this.message['type'] = MessageType.VIDEO;
    } else {
      this.message['type'] = this.message['url'].length ? MessageType.IMAGE : MessageType.TEXT;
    }
    const message = JSON.parse(JSON.stringify(this.message));
    this.messagesService.addMessage(message);
  }
}
