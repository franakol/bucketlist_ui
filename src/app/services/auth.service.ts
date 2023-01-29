import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl:string="http://127.0.0.1:8082/auth/"
  constructor(private http : HttpClient) { }

  register(userobj: any): Observable<any>{
    return this.http.post<any> (`${this.baseurl}register`, userobj).pipe(
      map(data => {
        return data;
      }))

    
  }

  login(loginobj:any): Observable<any>{
    return this.http.post<any> (`${this.baseurl}login`,loginobj).pipe(
      map(data => {
        return data;
      }))


  }
}
