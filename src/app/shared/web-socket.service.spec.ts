import { TestBed, inject } from '@angular/core/testing';

import { WebSocketService } from './web-socket.service';
import { testModule } from './test.module';

describe('WebSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
  });

  it('should be created', inject([WebSocketService], (service: WebSocketService) => {
    expect(service).toBeTruthy();
  }));

  it('should allow us to subscribe to the messages events',
  inject([WebSocketService], (service: WebSocketService) => {
    service.getWebSocketObservable()
        .subscribe((message) => {
        expect(message).toBeNull();
    });
  }));

  it('should dispatch a message upon reception',
  inject([WebSocketService], (service: WebSocketService) => {
    const testMessage = 'test';
    service.onMessage(testMessage);
    service.getWebSocketObservable().subscribe((message) => {
      expect(message).toBe(testMessage);
    });
  }));
});
