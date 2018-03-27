import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../messages.service';
import { HttpClientModule } from '@angular/common/http';
import { testModule } from '../../shared/test.module';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
