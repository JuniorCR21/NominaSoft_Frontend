import { AbstractControl } from "@angular/forms";

export class EmployeeValidators{

  static isYounger (control:AbstractControl){
    const fecha = control.value;
    let timeDiff = Math.abs(Date.now() - new Date(fecha).getTime());
    let edadEmpleado = Math.floor((timeDiff / (1000 * 3600 * 24))/365)
    if(edadEmpleado < 18)
      return {isYounger: true};
    return null;
  }
}
