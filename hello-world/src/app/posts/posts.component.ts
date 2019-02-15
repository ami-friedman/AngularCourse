import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient ) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = <any []>response;
    });
  }

  addPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.http.post(this.url, post)
    .subscribe(response => {
       this.posts.splice(0, 0, response);
    });
  }

  updatePost(post, btn: HTMLButtonElement) {
    btn.textContent = 'Updating...';
    this.http.put(this.url + '/' + post.id, {isRead: false})
    .subscribe(response => {
      btn.textContent = 'Update';
      console.log(response);
    }, error => {
      btn.textContent = 'Update';
      console.log(error);
    });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe( reponse => {
      const idx = this.posts.indexOf(post);
      this.posts.splice(idx, 1);
    });
  }


}
