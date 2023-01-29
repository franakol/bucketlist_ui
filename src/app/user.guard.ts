import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router, private route: ActivatedRoute) {}
  canActivate(){
   const  isUser = true;

   if(isUser){
    return true;
   }
   else{
    return false;
   }
    
  }
  
}
