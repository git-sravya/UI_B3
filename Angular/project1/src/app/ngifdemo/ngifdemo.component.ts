import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifdemo',
 // templateUrl: './ngifdemo.component.html',
 template:`
 <div *ngIf="num%2==0 then A else B"></div>
 <ng-template #A> 
 This is the if div
 </ng-template>
 <ng-template #B>
  This is the else div
</ng-template>
 `,
  styleUrls: ['./ngifdemo.component.css']
})
export class NgifdemoComponent {

  num=21;

}
