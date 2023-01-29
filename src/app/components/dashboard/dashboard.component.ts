import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BucketlistService } from 'src/app/services/bucketlist.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

bucketlists: any;
  

   constructor(private bucketlistService: BucketlistService, private router : Router) { }
   
    
  
  ngOnInit() {
  this.bucketlistService.getBucketlists().subscribe((data: any[]) => {
    this.bucketlists = data;
   });
    
   }
}



