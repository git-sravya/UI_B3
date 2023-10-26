import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compInteractiondemo';
  name='Sameer';
  email='Sameer@gmail.com'
  message!:string;
  message2!:string;
}
