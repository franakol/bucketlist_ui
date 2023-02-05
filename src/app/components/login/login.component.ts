import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private router : Router) {}

  ngOnInit(): void{
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
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
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      const userDetails = localStorage.getItem('userDetails') || '[]';
      console.log("user details from local storage", userDetails);
      const users = JSON.parse(userDetails);
      const user = users.find((user: { username: any; }) => user.username === username);

      if (user && user.password === password) {
        console.log("logged in user is navigated to the bucketlist")
        alert("You are logged in!")
        this.loginForm.reset();
        this.router.navigate(['bucketlist'])
      } else {
        alert("Invalid email or password")
      }
    } else {
      validateForms.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
  }
}
 


