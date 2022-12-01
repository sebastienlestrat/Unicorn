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

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ImageComponent,
    AvatarComponent,
    GooglelogoComponent,
    EyesinputComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
