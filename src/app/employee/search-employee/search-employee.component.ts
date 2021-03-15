import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})

export class SearchEmployeeComponent implements OnInit {
  EmpSearchForm: FormGroup;
  allEmployees = [];
  resetRows;
  temp;

  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.displayEmployees();
    this.EmpSearchForm = this.formBuilder.group({
      EmployeeName: [""],
      department: [""],
    });
  }

  displayEmployees() {
    this.allEmployees = this.EmployeeService.getAllEmp();
    for (let emp in this.allEmployees) {
      this.allEmployees[emp].checked = false;
    }
    console.log(this.allEmployees)
    this.resetRows = this.allEmployees;
  }

  CheckAllOptions(value) {
    console.log(value)
    if (value == true) {
      for (let emp in this.allEmployees) {
        this.allEmployees[emp].checked = true;
      }
    } else {
      for (let emp in this.allEmployees) {
        this.allEmployees[emp].checked = false;
      }
    }
  }

  search(form) {
    const employeeName = form.value.EmployeeName;
    const empDep = form.value.department

    this.allEmployees = this.resetRows
    this.temp = this.allEmployees.filter(emp => emp.name == employeeName && emp.department == empDep);

    if (this.temp != []) {
      this.allEmployees = this.temp;
    } else {
      this.allEmployees = this.resetRows
    }
    if (employeeName == "" || employeeName == "") {
      this.allEmployees = this.resetRows;
    }
  }
}
