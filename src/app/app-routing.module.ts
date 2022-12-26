import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',  // localhost:4200 => AppComponent => Router-Outlet
    component: ContainerComponent, // ContainerComponent => Router-Outlet
    children: [
      {
        path: 'login', // localhost:4200/login
        component: LoginFormComponent
      },
      {
        path: 'forgetpassword',
        component : ForgetPasswordComponent
      },
      {
        path: 'register', // localhost:4200/register
        component: RegisterFormComponent, 
      }
    ]
  },
  {
    path: 'dashboard', // localhost:4200/dashboard
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
