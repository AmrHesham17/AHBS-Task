import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmployees = [];
  constructor() { }
  AddEmp(employee) {
    this.allEmployees.push(employee);
    console.log(this.allEmployees)
  }
  getAllEmp() {
   return this.allEmployees;
  }
}
