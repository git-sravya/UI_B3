import { Component } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-tdfdemo',
  templateUrl: './tdfdemo.component.html',
  styleUrls: ['./tdfdemo.component.css']
})
export class TdfdemoComponent {
  user:User=new User();

  Register(form:any){
    console.log(form.value);
  }

}
