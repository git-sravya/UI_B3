import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Employees=[
    {
      "id": 234,
      "name": "John",
      "Designation": "Manager"
    },
    {
      "id": 456,
      "name": "Mary",
      "Designation": "Engineer"
    },
    {
      "id": 765,
      "name": "Mark",
      "Designation": "Manager"
    },
    {
      "id": 898,
      "name": "Andrew",
      "Designation": "HR"
    },
   
    {
      "id": 989,
      "name": "Sam",
      "Designation": "HR"
    }
  ]


  GetEmployees()
  {
    return this.Employees;
  }
  
}
