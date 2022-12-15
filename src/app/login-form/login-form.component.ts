import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private router:Router) {}
  navigateToRegister() {
    this.router.navigateByUrl('/register');
  }

  login() {
    console.log('TRYING TO LOG IN')
  }
  
  validateLogin(username:string) {
    console.log(username)
  }
  
}
