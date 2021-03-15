import { Routes } from "@angular/router";

export const employees_ROUTES: Routes = [
  {
    path: "add-employee",
    loadChildren: () =>
      import(
        "../modules/add-employee.module"
      ).then((m) => m.AddEmployeeModuel),
  },
  {
    path: "search-employee",
    loadChildren: () =>
      import(
        "../modules/search-employee.module"
      ).then((m) => m.SearchEmployeeModuel),
  },

];
