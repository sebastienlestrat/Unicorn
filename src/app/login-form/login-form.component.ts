import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  objet!: Object;


  constructor (private router : Router) {}


  ngOnInit() : void {}

  onForgetPassword () : void {
   this.router.navigateByUrl('forgetpassword')
}


  onRegister() {
  this.router.navigateByUrl('/register');
  }

  // login() {
  //   console.log('TRYING TO LOG IN')
  // }
  
  // validateLogin(username:string) {
  //   console.log(username)
  // }

  // actionEcouteur() {
  //     this.router.navigateByUrl('')
  // }
  
}
