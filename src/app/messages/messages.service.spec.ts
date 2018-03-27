import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { testModule } from '../shared/test.module';
import { messages } from './mock';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(testModule);
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should load new messages', inject([MessagesService], (service: MessagesService) => {
    service.loadMessages();
    service.getMessagesObservable()
    .subscribe((_messages) => {
      expect(_messages).toBe(messages);
    });
  }));
});
