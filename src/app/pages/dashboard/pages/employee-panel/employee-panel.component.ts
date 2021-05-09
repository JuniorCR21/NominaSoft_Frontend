import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';
import { config } from 'rxjs';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  date:Date = new Date();
  empleados:Employee[];
  modalEmpleado: BsModalRef;

  constructor(private employeeService:EmployeeService,
              private modalService: BsModalService) { }

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

  openModal(template: TemplateRef<any>) {
    this.modalEmpleado = this.modalService.show(template,{
      backdrop: 'static',
      keyboard: false,
      class: 'modal-lg'
    });
  }

  cerrarModal(template: TemplateRef<any>){
    this.modalEmpleado.hide();
  }

}
