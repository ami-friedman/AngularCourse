import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked = false;

  onChange($event) {
    console.log($event);
    this.isChecked = !this.isChecked;
  }


}