import { Injectable } from '@angular/core';
import { ApiConfig } from './config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {
  private ws: WebSocket;
  private wsSubject = new BehaviorSubject<any>(null);

  constructor(private apiConfig: ApiConfig) {
  }

  init() {
    this.ws = new WebSocket(this.apiConfig.ws_url);
    this.ws.onmessage = ((message) => this.onMessage(message));
    this.ws.onopen = (() => console.log('WebSocket opened'));
  }

  onMessage(message) {
    this.wsSubject.next(message);
  }

  getWebSocketObservable(): Observable<any> {
    return this.wsSubject.asObservable();
  }
}
