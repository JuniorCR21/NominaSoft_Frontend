import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  date:Date = new Date();
  empleados:Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.listarEmpleados();
  }

  listarEmpleados(){
    this.employeeService.getEmployees().subscribe(
      employess =>{
        this.empleados = employess;
      }
    )
  }

}
