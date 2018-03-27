import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagAreaComponent } from './hashtag-area.component';

describe('HashtagAreaComponent', () => {
  let component: HashtagAreaComponent;
  let fixture: ComponentFixture<HashtagAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashtagAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashtagAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
