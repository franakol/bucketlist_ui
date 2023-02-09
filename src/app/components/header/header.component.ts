import { Component, OnInit} from '@angular/core';
import { BucketlistService } from 'src/app/services/bucketlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username: string= "";
  myNumber: any = '';

  constructor(private bucketlisService: BucketlistService, private router: Router) {
  }

  ngOnInit() {
    this.myNumber =  this.bucketlisService.getNumber();
    let navBar = document.getElementById("navbar");
    let flow = document.getElementById("flow");
    if(navBar){
      navBar.addEventListener('click',() => {
      if(flow)
      flow.classList.toggle("fin")
      });
      }
      
      // handling the profile logic
 }

  logout() {
    // Perform logout logic here
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("bucketlistData")
      this.router.navigate(["/login"]);
    }
    
  
  resetPassword(){
    // reset password logic here
  }
}