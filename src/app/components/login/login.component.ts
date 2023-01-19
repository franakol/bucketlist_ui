import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForms from 'src/app/helpers/validateform';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: String = "fa-eye-slash"
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";

  }

  onSubmit(){
    if(this.loginForm.valid){

      console.log(this.loginForm.value)
    //send the obj  to database
    
  }else{

      
       
    //throw the error using toaster and with required fields
    validateForms.validateAllFormFields(this.loginForm);
    alert("Your form is invalid")
    }
  }

 

}
