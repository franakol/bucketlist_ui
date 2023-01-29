import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username: string= "";

  ngOnInit() {
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
    
  }
  resetPassword(){
    // reset password logic here
  }
}