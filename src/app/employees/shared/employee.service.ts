import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  RequestOptions,
  RequestMethod
} from "@angular/http";

import { Employee } from "./employee.model";
import { map } from "rxjs/operators";

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employeeList: Employee[];
  private http: Http;
  constructor() {}

  postEmployee(emp: Employee) {
    var body = JSON.stringify(emp);
    var headerOptions = new headerOptions({
      "Content-Type": "application/json"
    });
    var requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      headers: headerOptions
    });
    return this.http
      .post("http://localhost:28750/api/Employee", body, requestOptions)
      .pipe(map(x => x.json()));
  }

  getEmployeeList() {
    alert("hi");
    this.http
      .get("https://dummyapi.io/data/api/user?limit=10")
      .pipe(
        map(data => {
          alert("hello");
          return data.json() as Employee[];
        })
      )
      .toPromise()
      .then(x => {
        alert(x);
      });
  }
}
