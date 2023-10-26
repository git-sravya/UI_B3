import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  //templateUrl: './input.component.html',
  template:`
  <h1>This is input component</h1>
  Data in input- {{pdata}}
  <br>
  Email for app - {{pemail}}
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() pdata!:string;
  @Input() pemail!:string;

}
