import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegisterPanelComponent } from './pages/register-panel/register-panel.component';
import { HomePanelComponent } from './pages/home-panel/home-panel.component';
import { PaymentPanelComponent } from './pages/payment-panel/payment-panel.component';
import { EmployeePanelComponent } from './pages/employee-panel/employee-panel.component';
import { EmployeeService } from './shared/services/employee.service';


@NgModule({
  declarations: [
    RegisterPanelComponent,
    HomePanelComponent,
    PaymentPanelComponent,
    EmployeePanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    EmployeeService
  ]
})
export class DashboardModule { }
