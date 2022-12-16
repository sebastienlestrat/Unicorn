import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AvatarComponent } from './_pages/avatar/avatar.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { EyesinputComponent } from './_pages/eyesinput/eyesinput.component';
import { GooglelogoComponent } from './_pages/googlelogo/googlelogo.component';
import { ImageComponent } from './_pages/image/image.component';
import { SigninComponent } from './_pages/signin/signin.component';

const routes: Routes = [
  {
    path: '',  // localhost:4200 => AppComponent => Router-Outlet
    component: ContainerComponent, // ContainerComponent => Router-Outlet
    children: [
      {
        path: 'login', // localhost:4200
        component: LoginFormComponent
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
