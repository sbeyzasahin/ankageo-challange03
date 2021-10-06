import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(ListComponent) listComponents: QueryList<ListComponent>;
  @ViewChild(FormComponent, { static: true }) formComponent: FormComponent;
  // dateValue = new Date();
  title = 'ankageo-challange03';

  constructor() {
  }



  getDataFromFormComponent = () => {
    return this.formComponent.formGroup.getRawValue();
  }

  ngOnInit() {
  }

  removeDataList() {
    this.listComponents.forEach(l => {
      l.dataSource = [];
    })
  }
}



function deneme() {

}

const deneme2 = function () {

}


const deneme3 = () => {

}
