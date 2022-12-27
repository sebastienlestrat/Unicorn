import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm! : FormGroup ;
  passwordRegex! : RegExp ; 

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    
    this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    this.registerForm = this.formBuilder.group({
      username : ["", [
        Validators.required
      ]] , 
      email : ["", [
        Validators.required
      ]],
      password : ["", [
        Validators.required, 
        Validators.pattern(this.passwordRegex)
      ]] ,
      phone : ["", [
        Validators.required
      ]]
    }) ;

  }

  onSubmitForm () : void {
    console.log(this.registerForm.value) ; 
  }

}
