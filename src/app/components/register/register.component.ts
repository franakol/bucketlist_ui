import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForms from 'src/app/helpers/validateform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  type: string = "password";
  isText: boolean = false;
  eyeIcon: String = "fa-eye-slash"
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })


  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";

  }
  onRegister(){
    if(this.registerForm.valid){

      
    //perform logic for register
    console.log(this.registerForm.value)
    
  }else{

      
       
    //logic for throwing error
    validateForms.validateAllFormFields(this.registerForm);
    alert("Your form is invalid")
    }
  }

  
 }




