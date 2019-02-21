import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers: any[];

  constructor(private service: FollowersService, private router: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest([
      this.router.paramMap,
      this.router.queryParamMap
    ])
    .switchMap( combined => {
      return this.service.getAll();
    })
    .subscribe( followers => this.followers = followers);
  }
}
