import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    title: 'This is my tweet',
    isLiked: true,
    likeCount: 100
  };
}
