import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'hashtags'
})
export class HashtagsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, args?: any): any {
    const regex = /#(\w+)/g;
    const matches = value.match(regex);
    if (matches) {
      matches.forEach((hashtag) => {
        value = value.replace(hashtag, `<span style="color:blue">${hashtag}</span>`);
      });
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
