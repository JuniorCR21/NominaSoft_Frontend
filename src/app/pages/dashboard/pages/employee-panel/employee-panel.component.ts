import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeValidators } from '../../shared/utils/employee-validators'
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  date;
  inputDate = moment().format('YYYY-MM-DD');
  fecha;
  empleados:Employee[];
  modalEmpleado: BsModalRef;
  empleado:Employee = new Employee();
  formGuardarEmpleado:FormGroup;
  toastr: any;

  constructor(private employeeService:EmployeeService,
              private modalService: BsModalService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.configMoment();
    this.configForm();
    this.listarEmpleados();
  }

  configMoment(){
    moment.locale('es-PE');
    this.date= moment().format('LLLL');
  }

  configForm(){
    this.formGuardarEmpleado = this.formBuilder.group({
      id: [''],
      dni: ['',[Validators.required,Validators.minLength(8)]],
      nombre: ['',[Validators.required]],
      direccion:['',[Validators.required]],
      telefono: ['',[Validators.required]],
      estadoCivil: ['',[Validators.required]],
      gradoAcademico:['',[Validators.required]],
      fechaNacimiento: ['', [Validators.required,EmployeeValidators.isYounger]]
    })
  }

  listarEmpleados(){
    this.employeeService.getEmployees().subscribe(
      employess =>{
        this.empleados = employess;
      }
    )
  }

  crearEmpleado(template: TemplateRef<any>){
    this.empleado = this.formGuardarEmpleado.value;
    this.employeeService.saveEmployee(this.empleado).subscribe(
      nuevoEmpleado =>{
        this.listarEmpleados();
        Swal.fire(
          'Nuevo Empleado!',
          `Empleado ${this.empleado.nombre} creado(a) con éxito`,
          'success'
        )
        this.cerrarModal()
      },(error) =>{
        this.toastr.error('Problemas de conexión con el servidor','Error 500',{
          timeOut:3000,
          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true
        })
        this.cerrarModal()
      }
    )
  }

  editarEmpleado(){
    this.empleado = this.formGuardarEmpleado.value;
    this.employeeService.editEmployee(this.empleado,this.empleado.id).subscribe(
      empleado =>{
        this.listarEmpleados();
        Swal.fire(
          'Empleado Editado!',
          `Empleado ${this.empleado.nombre} editado(a) con éxito`,
          'success'
        )
        this.cerrarModal();
      },(error) =>{
        this.toastr.error('Problemas de conexión con el servidor','Error 500',{
          timeOut:3000,
          progressBar: true,
          progressAnimation: 'increasing',
          closeButton: true
        })
        this.cerrarModal()
      }
    )
  }

  openModal(template: TemplateRef<any>, empleado) {
    if(empleado){
      this.formGuardarEmpleado.patchValue(empleado);
    }
    this.modalEmpleado = this.modalService.show(template,{
      backdrop: 'static',
      keyboard: false,
      class: 'modal-lg'
    });
  }

  cerrarModal(){
    this.modalEmpleado.hide();
    this.formGuardarEmpleado.reset();
    this.empleado = new Employee();
  }


}
