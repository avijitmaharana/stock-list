import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  value = 30;
  checkBox: FormGroup;
  constructor(){
    this.checkBox = new FormGroup({
      'chkArr': new FormArray([
        new FormGroup({
          'chk': new FormControl()
        })
      ])
    })
  }
  get controls() {
    return (this.checkBox.get('chkArr') as FormArray).controls;
  }
  addItem(){
    (this.checkBox.get('chkArr') as FormArray).push(
      new FormGroup({
        'chk': new FormControl()
      })
    )
  }
}
