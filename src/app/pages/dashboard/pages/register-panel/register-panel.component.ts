import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent implements OnInit {

  dni:string="";
  date:Date = new Date();
  empleado: Employee = new Employee();
  encontrado:boolean = true;

  constructor(private toastr:ToastrService,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  buscarEmpleado(){
    if(this.dni === ''){
      this.toastr.info('Ingrese el DNI del empleado','Campo Vacío',{
        timeOut:3000,
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true
      })
    }else{
      this.employeeService.getEmployee(this.dni).subscribe(
        employee=>{
          if(employee !== null){
            this.encontrado = true;
            this.empleado = employee;
            console.log(employee);
          }else{
            this.dni="";
            this.encontrado = false;
            this.toastr.error('No existe el empleado','Error',{
              timeOut:3000,
              progressBar: true,
              progressAnimation: 'increasing',
              closeButton: true
            })
          }

        },(error) =>{
          this.toastr.error('Problemas de conexión con el servidor','Error 500',{
            timeOut:3000,
            progressBar: true,
            progressAnimation: 'increasing',
            closeButton: true
          })
        }
      )
    }
  }

}
