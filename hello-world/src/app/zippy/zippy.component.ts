import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  panel = {
    title: 'Title',
    body: 'Body',
  };

  clicked = false;

  constructor() { }

  onClick() {
    this.clicked = !this.clicked;
  }



}
