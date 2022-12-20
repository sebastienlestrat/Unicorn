import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ImageComponent } from './_pages/image/image.component';
import { AvatarComponent } from './_pages/avatar/avatar.component';
import { GooglelogoComponent } from './_pages/googlelogo/googlelogo.component';
import { EyesinputComponent } from './_pages/eyesinput/eyesinput.component';
import { SigninComponent } from './_pages/signin/signin.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ButtonComponent } from './_components/button/button.component';
import { InputComponent } from './_components/input/input.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ImageComponent,
    AvatarComponent,
    GooglelogoComponent,
    EyesinputComponent,
    SigninComponent,
    LoginFormComponent,
    DashboardComponent,
    RegisterFormComponent,
    ButtonComponent,
    InputComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
