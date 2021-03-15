import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchEmployeeRoutingModuel } from '../routing/search-employee-routing.module';
import { SearchEmployeeComponent } from '../employee/search-employee/search-employee.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
    declarations: [SearchEmployeeComponent],
    imports: [
      CommonModule,
      SearchEmployeeRoutingModuel,
      RouterModule,   
      ReactiveFormsModule
    ],
  })
  export class SearchEmployeeModuel {}

