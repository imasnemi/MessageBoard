import { Component, OnInit, Input } from '@angular/core';
import { Message, MessageType } from '../message';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input('message') message: Message;
  @Input('index') index: number;
  messageType = MessageType;
  safeUrl: SafeUrl;
  safeContent: SafeHtml;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.message.type === MessageType.VIDEO) {
      this.message.url = this.message.url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.message.url);
    }
  }

}
