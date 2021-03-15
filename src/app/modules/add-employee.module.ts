import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddEmployeeRoutingModuel } from '../routing/add-employee-routing.module';
import { AddEmployeeComponent } from '../employee/add-employee/add-employee.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddEmployeeComponent],
  imports: [
    CommonModule,
    AddEmployeeRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
})
export class AddEmployeeModuel { }

