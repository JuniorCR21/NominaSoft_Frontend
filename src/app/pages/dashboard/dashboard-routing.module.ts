import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomePanelComponent } from './pages/home-panel/home-panel.component';
import { PaymentPanelComponent } from './pages/payment-panel/payment-panel.component';
import { RegisterPanelComponent } from './pages/register-panel/register-panel.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path:'home-panel',
        component:HomePanelComponent
      },
      {
        path:'register-panel',
        component: RegisterPanelComponent
      },
      {
        path:'payment-panel',
        component:PaymentPanelComponent
      }
    ]
  },
  {
    path:'**' , redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
