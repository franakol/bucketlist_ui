import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from 'src/app/helpers/validateform';


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

  constructor(private fb: FormBuilder, private router : Router) {}

  ngOnInit(): void{
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })


  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password";

  }
  onRegister(){
    if (this.registerForm.valid){
      const { username, password } = this.registerForm.value;
      const userDetails = localStorage.getItem('userDetails') || '[]';
      const users = JSON.parse(userDetails);
      users.push({ username, password });
      localStorage.setItem('userDetails', JSON.stringify(users));


      this.registerForm.reset();
      this.router.navigate(['login']);
    }else{
      //logic for throwing error
      validateForms.validateAllFormFields(this.registerForm);
      alert("Your form is invalid")
    }
  }
  }


  
 




