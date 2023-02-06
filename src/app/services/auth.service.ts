
import { Injectable } from '@angular/core';



interface userDetails{
  username: string;
  password: string;
  
}
@Injectable({
  providedIn: 'root'
})


export class AuthService {

   private users : userDetails[] = [];

  constructor() { }


  register(userDetails: userDetails) {
    this.users.push(userDetails);
    return true;
  }

  login(userDetails: userDetails) {
    const foundUser = this.users.find(user => user.username === userDetails.username && user.password === userDetails.password);
    if (foundUser) {
      return true;
    }
    return false;
  }

}
