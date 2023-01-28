import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  bucketlists: any[] = [];
  // authService: any;

   constructor(private router : Router) { }

  // ngOnInit() {
  //   this.authService.getBucketlists().subscribe((data: any[]) => {
  //     this.bucketlists = data;
  //   });
    
  // }
  createBucketlist() {
     this.router.navigate(['/create-bucketlist']);

}  
}
