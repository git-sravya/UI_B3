import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdfdemo',
  templateUrl: './mdfdemo.component.html',
  styleUrls: ['./mdfdemo.component.css']
})
export class MdfdemoComponent {

  mdfForm=new FormGroup({
    name:new FormControl('harry',[Validators.required,Validators.maxLength(5)]),
    email:new FormControl('harry@gmail.com'),
    password:new FormControl(),
    mobile:new FormControl()
  })

  get name(){
    return this.mdfForm.value.name;
  }
    
  Register(){
    console.log(this.mdfForm.value)
  }
}

