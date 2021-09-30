import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { AppComponent } from '../app.component';

interface User {
  firstName: string,
  lastName: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  constructor(public appComponent: AppComponent) { }
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() set removeState(value) {

    if (value && this.dataSource.length > 0) this.dataSource = [];
  }

  displayedColumns: string[] = ['firstName', 'lastName'];

  dataSource: User[] = [];

  ngOnInit(): void {

  }


  addUserToList() {
    this.dataSource = [...this.dataSource, { firstName: this.firstName, lastName: this.lastName }];
  }


}
