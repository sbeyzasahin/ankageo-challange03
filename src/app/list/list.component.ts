import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

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


  @Input() getData: () => { firstName: string, lastName: string };


  displayedColumns: string[] = ['firstName', 'lastName'];

  dataSource: User[] = [];

  ngOnInit(): void {

  }


  addUserToList() {
    this.dataSource = [...this.dataSource, this.getData()]
    // this.dataSource = [...this.dataSource, { firstName: this.firstName, lastName: this.lastName }];
  }


}
