import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm! : FormGroup ;
  passwordRegex! : RegExp ; 
  i! : number ;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    
    this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{15,}$/;

    this.registerForm = this.formBuilder.group({
      username : [null, [
        Validators.required,
        Validators.maxLength(15)
      ]] , 
      email : [null, [
        Validators.required,
        Validators.maxLength(15)
      ]],
      password : [null, [
        Validators.required, 
        Validators.pattern(this.passwordRegex),
        Validators.maxLength(15)
      ]] ,
      phone : this.formBuilder.array([
        Validators.required,
        Validators.minLength(8) 
      ]) 
    }, {
      updateOn : 'blur'
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


  
// bug de validation sur le formulaire ?? mettre du text si le input est invalid
  onSubmitForm () : void {
    console.log(this.registerForm.value) ; 

    // if (!this.registerForm.valid) 
    // {
    //   alert ('Form is invalid') ; 
    //   return ;
    // } 
    //   else 
    // {
    //   alert ('Succes')
    // }
    
  }

}
