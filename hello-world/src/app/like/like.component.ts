import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() likeCount: number;
  @Input() isLiked: boolean;
  private _currentCssClass: string;

  onClick() {
    this.isLiked = !this.isLiked;
    this.likeCount += (this.isLiked) ? 1 : -1;
  }

  ngOnInit() {
  }
}
