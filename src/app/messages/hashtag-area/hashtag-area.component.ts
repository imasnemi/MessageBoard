import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hashtag-area',
  templateUrl: './hashtag-area.component.html',
  styleUrls: ['./hashtag-area.component.css']
})
export class HashtagAreaComponent implements OnInit {
  @Input('hashtags') hashtags;

  constructor() { }

  ngOnInit() {
  }

}
