import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: Array<string>;

  constructor(authorsService: AuthorService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
  }

}
