import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private url: string) { }

  getAll() {
    return this.http.get(this.url)
      .map(response => <any[]>response)
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
      .map(response => <any>response)
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.put(this.url + '/' + resource.id, { isRead: false })
      .map(response => response)
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    if (error.status === 400) {
      return Observable.throw(new BadInputError(error));
    }

    return Observable.throw(new AppError(error));
  }
}
