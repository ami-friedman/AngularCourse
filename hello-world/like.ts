export class Like {
  private _selected: boolean;

  constructor(private _numOfLikes: number) {
    this._selected = false;
  }

  get selected() {
    return this._selected;
  }

  get numOfLike() {
    return this._numOfLikes;
  }

  click() {
    this._selected = !this._selected;
    if (this._selected) {
      this._numOfLikes++;
    } else {
      this._numOfLikes--;
    }
  }



}
