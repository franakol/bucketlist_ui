import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  type: string = "password";
  isText: boolean = false;
  eyeIcon: String = "fa-eye-slash"
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth : AuthService, private router : Router) {}

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

    console.log(this.registerForm.value)
    // perform logic for register
    this.auth.register(this.registerForm.value)
    .subscribe({
      next:(res)=>{
        alert(res?.message ?? "unknown message")
        // displays the message otherwise it will display "unknown message".
        this.registerForm.reset();
        this.router.navigate(['login'])
      },
      error:(err)=>{
        alert(err?.error?.message ?? "unknown error") 
        // displays the error message otherwise it will display "unknown error".

      }
    })
   
    
    
  }else{

      
       
    //logic for throwing error
    validateForms.validateAllFormFields(this.registerForm);
    alert("Your form is invalid")
    }
  }

  
 }




