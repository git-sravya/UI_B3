import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfordemo',
 // templateUrl: './ngfordemo.component.html',
 template:`
 <ul>
  <li [style]="o ? 'color:green' : 'color:red'"  *ngFor="let f of numbers;odd as o">
   {{o}} - {{f}}
  </li>
 </ul>
 `,
  styleUrls: ['./ngfordemo.component.css']
})
export class NgfordemoComponent {

  numbers=[23,45,6,7,89,11,23]
  courses=[
    {"id":1,"name":"C","Fees":2000},
    {"id":2,"name":"C++","Fees":2000},
    {"id":3,"name":"PHP","Fees":3000},
    {"id":4,"name":"Java","Fees":5000},
    {"id":5,"name":"C#","Fees":6000},
    {"id":6,"name":"Python","Fees":3000}
    
  ]

}
