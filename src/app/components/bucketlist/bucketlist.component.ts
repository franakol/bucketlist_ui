import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from 'src/app/helpers/validateform';
import { BucketlistService } from 'src/app/services/bucketlist.service';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  bucketlistForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private bucketlist: BucketlistService) { }

  ngOnInit(): void {
    this.bucketlistForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onCreate() {
    if (this.bucketlistForm.valid) {
    this.bucketlist.create(this.bucketlistForm.value)
    .subscribe({
        next:(res)=>{
          alert(res?.message ?? "unknown message")
          this.bucketlistForm.reset();
          this.router.navigate(['/bucketlists'])
        },
        error:(err)=> {
          alert(err?.error?.message ?? "unknown error")
        }
    })
  } else {
      validateForms.validateAllFormFields(this.bucketlistForm);
      alert("Your form is invalid")
    }
  }

}