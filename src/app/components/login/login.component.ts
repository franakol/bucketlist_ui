import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForms from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  type: string = "password";
  isText: boolean = false;
  eyeIcon: String = "fa-eye-slash"
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {}

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

  onLogin(){
    if(this.loginForm.valid){

    console.log(this.loginForm.value)
    // send the obj  to database
    this.auth.login(this.loginForm.value)
    .subscribe({
      next:(res)=>{
        alert(res?.message ?? "unknown message")
        // displays the message otherwise it will display "unknown message".

      },
      error:(err)=>{
        alert(err?.error?.message ?? "unknown error")
        // displays the error message otherwise it will display "unknown error".

      }
    })
    
  }else{

      
       
    //throw the error using toaster and with required fields
    validateForms.validateAllFormFields(this.loginForm);
    alert("Your form is invalid")
    }
  }

 

}
