export class Like {
  private _isSelected: boolean;

  constructor(private _likeCount: number) {
    this._isSelected = false;
  }

  get isSelected() {
    return this._isSelected;
  }

  get likesCount() {
    return this._likeCount;
  }

  click() {
    this._isSelected = !this._isSelected;
    this._likeCount += (this._isSelected)? 1 : -1;
  }



}
