import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ankageo-challange03';
  firstName = '';
  lastName = '';
  removeState = false;

  constructor() { }

  ngOnInit() {

  }

  removeDataList() {
    this.removeState = true;
    setTimeout(() => {

      this.removeState = false;
    }, 1000);
  }
}
