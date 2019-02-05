import { Component, OnInit } from '@angular/core';

const INACTIVE_CSS_CLASS = 'glyphicon-star-empty';
const ACTIVE_CSS_CLASS = 'glyphicon-star';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  private _isActive: boolean;
  private _likeCount: number;
  private _currentCssClass: string;

  constructor() {
    this._isActive = false;
    this._likeCount = 0;
    this._currentCssClass = INACTIVE_CSS_CLASS;
  }

  get isActive() {
    return this._isActive;
  }

  get likesCount() {
    return this._likeCount;
  }

  get currentClass() {
    return this._currentCssClass;
  }

  click() {
    this._isActive = !this._isActive;
    this._likeCount += (this._isActive) ? 1 : -1;
    this._currentCssClass = (this._currentCssClass === INACTIVE_CSS_CLASS) ? ACTIVE_CSS_CLASS : INACTIVE_CSS_CLASS;
  }

  ngOnInit() {
  }
}
