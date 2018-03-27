import { HashtagsPipe } from './hashtags.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('HashtagsPipe', () => {
  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new HashtagsPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
