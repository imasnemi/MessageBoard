import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageInputComponent } from './messages/message-input/message-input.component';
import { UserComponent } from './users/user/user.component';
import { HashtagAreaComponent } from './messages/hashtag-area/hashtag-area.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users/users.service';
import { RestService } from './shared/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfig } from './shared/config';
import { BrowserModule } from '@angular/platform-browser';
import { testModule } from './shared/test.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(testModule).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Message board'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.appName).toEqual('Message board');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
