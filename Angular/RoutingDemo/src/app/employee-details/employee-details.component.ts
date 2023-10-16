import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  Employees:Employee[]=[]
 
  constructor(private service:EmployeeService){
    this.Employees=service.GetEmployees(); 
  }
  
}
