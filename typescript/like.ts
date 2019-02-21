function Component<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
    _likeCount = 8;
    _isSelected = true;
  }
} 

function Method() {
  return function(target:any, key: string, descriptor: PropertyDescriptor){
    const func = descriptor.value;
    descriptor.value = function(...args: any[]) {
      console.log('args:',args);
    }
    console.log('target:', target);
    console.log('key:', key);
  }
}


export class Like {
  private _isSelected: boolean;
  private _likeCount: number;
  
  constructor(count: number) {
    console.log('count:', count);
    this._likeCount = count;
    this._isSelected = false;
  }

  get isSelected() {
    return this._isSelected;
  }

  get likesCount() {
    return this._likeCount;
  }

  @Method()
  click(num: number) {
    this._isSelected = !this._isSelected;
    this._likeCount += (this._isSelected)? 1 : -1;
  }

}
