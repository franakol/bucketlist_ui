import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForms from 'src/app/helpers/validateform';
import { bucketlistData } from './bucket';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {

  bucketlistForm!: FormGroup;
  private bucketlists: bucketlistData[] = [];

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.bucketlistForm = this.fb.group({
      name: ['', Validators.required]
    });

  }

  
  onCreateBucketlist() {
    if (this.bucketlistForm.valid) {
    const name = this.bucketlistForm.value.name;
    const bucketlistData = localStorage.getItem('bucketlistData') || '[]';
    const bucketlists = JSON.parse(bucketlistData);
    const existingBucketlist = bucketlists.find((bucketlist: { name: any; }) => bucketlist.name === name);

    if (existingBucketlist) {
      alert("A bucketlist with this name already exists");
      return;
    }
    const bucket_id = bucketlists.length + 1; // Generate unique bucket_id
    const date_created = new Date().toISOString();
    const date_updated = date_created;
    bucketlists.unshift({bucket_id, name, date_created, date_updated, items: []});
    localStorage.setItem('bucketlistData', JSON.stringify(bucketlists));
    this.bucketlistForm.reset();
    this.router.navigate(['dashboard'])
    // alert("Bucketlist created successfully");
    } else {
    validateForms.validateAllFormFields(this.bucketlistForm);
    alert("Your form is invalid");
    }
    }
    
    
}