import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  value: number;
  total;
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
    this.onChange();
  }
  removeItem(index){
    (this.checkBox.get('chkArr') as FormArray).removeAt(index);
    this.onChange();
  }
  onChange(){
    // console.log(this.checkBox.get('chkArr').value);
    this.total = this.checkBox.get('chkArr').value;
    let count = 0;
    for(let i in this.total){
      if(this.total[i].chk){
        ++count; 
      }
    }
    this.value = (count/this.total.length)*100;
  }
}
