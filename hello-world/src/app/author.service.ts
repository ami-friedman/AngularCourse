import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  public getAuthors() {
    return ['Mike', 'David', 'George'];
  }
}
