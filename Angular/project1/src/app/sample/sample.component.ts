import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  //templateUrl: './sample.component.html',
  template:`
  My name is {{name}}
  <h1 [ngClass]="'p1'">Heading</h1>
  <p  [ngStyle]="obj">Not eligible</p>
  <img  [src]="status?imgsrc:imgsrc2"/>
  <input type="button"  [value]="status?'Off':'On'" (click)="changeimg()"/>
  <p ></p>
  `,
  styleUrls:['./sample.component.css']

})
export class SampleComponent {
   obj={'color':'blue','background-color':'orange'};
   name='Sam'
   age=19
   pstyle="green"
   pstyle1='red'
   imgsrc="assets/images/1.jfif"
   imgsrc2="assets/images/2.jfif";
    status=true;

   changeimg()
   {
      this.status= this.status? false:true;
   }

}
