import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegisterPanelComponent } from './pages/register-panel/register-panel.component';
import { HomePanelComponent } from './pages/home-panel/home-panel.component';
import { PaymentPanelComponent } from './pages/payment-panel/payment-panel.component';


@NgModule({
  declarations: [
    RegisterPanelComponent,
    HomePanelComponent,
    PaymentPanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
