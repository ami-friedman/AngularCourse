import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          this.posts[0]['id'] = newPost.id;
        }, (error: AppError) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInputError) {
            alert('Bad Request');
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(updatedFields => console.log(updatedFields));
  }

  deletePost(post) {
    const idx = this.posts.indexOf(post);
    this.posts.splice(idx, 1);
    this.service.delete(1000)
      .subscribe(
       null, (error: AppError) => {
          this.posts.splice(idx, 0, post);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
        });
  }
}
