import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public formGroup: FormGroup;
  firstName = new FormControl('')
  lastName = new FormControl('')

  public firstNameInput = '';
  public lastNameInput = '';

  constructor(private fb: FormBuilder, private appComponent: AppComponent) {
    this.formGroup = fb.group({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  ngOnInit(): void {
    this.formGroup.get('firstName').valueChanges.subscribe((value) => this.appComponent.firstName = value);
    this.formGroup.get('lastName').valueChanges.subscribe((value) => this.appComponent.lastName = value);
  }

}
