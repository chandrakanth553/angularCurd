import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  employees;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }

}
