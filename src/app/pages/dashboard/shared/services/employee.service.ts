import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url= "http://localhost:8080/api";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/empleados`);
  }

  getEmployee(id):Observable<Employee>{
    return this.http.get<Employee>(`${this.url}/empleados/${id}`);
  }

  saveEmployee(nuevoEmpleado:Employee){
    return this.http.post<Employee>(`${this.url}/crear`,nuevoEmpleado,{headers: this.httpHeaders});
  }

  editEmployee(empleado:Employee, id){
    return this.http.put<Employee>(`${this.url}/empleados//${id}`,empleado,{headers: this.httpHeaders});
  }
}
