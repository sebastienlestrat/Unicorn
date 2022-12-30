import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  validateName(username : string) {
    console.log(username) ;
  }
  
  validatePassword (password : string) {
    console.log(password) ;
  }

  registerForm! : FormGroup ;
  passwordRegex! : RegExp ; 

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    
    this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    this.registerForm = this.formBuilder.group({
      username : ['', [ // le "" représente la valeur par défaut
        Validators.required,
      ]] , 
      email : ['', [
        Validators.required,
        Validators.email
      ]],
      password : ['', [
        Validators.required, 
      ]] ,
      phone : this.formBuilder.array([]),
    }) ;
    
  }
  get username () {
    return this.registerForm.get('username') ;
  }
  get email () {
    return this.registerForm.get('email') ;
  }
  get password () {
    return this.registerForm.get('password') ;
  }
  get phones () {
    return this.registerForm.get('phones') as FormArray ;
  }
  
  getPhones (index : number) {
  return this.phones.controls[index].get('phoneNumber') ; 
  }

  getPhoneCode (index : number) {
    return this.phones.controls[index].get('phoneCode') ; 
    }


  onSubmitForm () {
    if (!this.registerForm.valid) {
      alert ('Form is invalid') ; 
      return ;
    } 
      alert (' Please, verify your identity on the link in your mailbox');
  }

  onLogin () {
    console.log ('Bonjour' + this.username)
  }


}
