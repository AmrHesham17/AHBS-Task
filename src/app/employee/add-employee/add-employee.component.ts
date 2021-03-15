import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { EmployeeService } from "../../service/employee.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  EmployeeForm: FormGroup;
  allEmployees = [];

  planModel: any = { start_time: new Date() };
  formattedDate = this.planModel['start_time'].toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  }).replace(/ /g, '-');

  constructor(
    private formBuilder: FormBuilder,
    private EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.EmployeeForm = this.formBuilder.group({
      EmployeeName: ["", Validators.required],
      deparment: ["", Validators.required],
      EmployeeCode: ["", Validators.required],
      Gender: ["", Validators.required],
      date: [this.formattedDate, Validators.required],
    });
  }

  onSubmit(form) {
    console.log(form)
    let Employee = {
      'name': form.value.EmployeeName,
      'department': form.value.deparment,
      'birthday': form.value.date['day'] + '-' + form.value.date['month'] + '-' + form.value.date['year'],
      'code': form.value.EmployeeCode,
      'Gender': form.value.Gender
    }
    console.log(Employee);
    this.EmployeeService.AddEmp(Employee);
    form.reset();
  }
}
