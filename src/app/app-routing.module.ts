import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './_pages/avatar/avatar.component';
import { EyesinputComponent } from './_pages/eyesinput/eyesinput.component';
import { GooglelogoComponent } from './_pages/googlelogo/googlelogo.component';
import { ImageComponent } from './_pages/image/image.component';
import { SigninComponent } from './_pages/signin/signin.component';

const routes: Routes = [
{
  path: 'avatar' , 
  component : AvatarComponent
},

{
  path : 'eyesinput' , 
  component : EyesinputComponent
},

{
  path : 'googlelogo' ,
  component : GooglelogoComponent
}, 

{
  path : 'image' , 
  component : ImageComponent
},

{
  path : 'signin' , 
  component : SigninComponent
}, 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
