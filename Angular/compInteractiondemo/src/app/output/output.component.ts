import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public child=new EventEmitter();
  @Output() public child1=new EventEmitter();

  change()
  {
   this.child1.emit('new content');
  }
  fireEvent()
  {
    this.child.emit('Hello World');
   
  }

}
