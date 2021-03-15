import { NgModule } from '@angular/core';
import { EmployeeComponent } from '../app/employee/employee.component';
import { employees_ROUTES } from '../app/routing/employee-routing.module ';
import { SearchEmployeeComponent } from '../app/employee/search-employee/search-employee.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: EmployeeComponent,
    children: employees_ROUTES,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
