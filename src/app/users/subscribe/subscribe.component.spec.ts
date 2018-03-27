import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeComponent } from './subscribe.component';
import { testModule } from '../../shared/test.module';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
