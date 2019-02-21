import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  year: string;
  month: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe( params => {
      this.year = params.get('year');
      this.month = params.get('month');
    });
  }

  viewAll() {
    this.router.navigate([
      ''
    ]);

  }

}
