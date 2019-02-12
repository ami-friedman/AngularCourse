import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {

  categories = [
    'Development',
    'Art',
    'Language'
  ];

  log(f) {
    console.log(f);
  }

}
