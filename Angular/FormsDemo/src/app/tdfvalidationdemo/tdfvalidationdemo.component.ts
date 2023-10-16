import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-tdfvalidationdemo',
  templateUrl: './tdfvalidationdemo.component.html',
  styleUrls: ['./tdfvalidationdemo.component.css']
})
export class TDFValidationdemoComponent {
  user:User=new User();

  Register(form:any){
    console.log(form.value);
  }


}
