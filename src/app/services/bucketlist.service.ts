import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BucketlistService {

  private baseurl:string="http://127.0.0.1:8082/"


  constructor(private http: HttpClient) { }

  create(bucketlistobj: any): Observable<any>{
    return this.http.post<any> (`${this.baseurl}bucketlists/`, bucketlistobj).pipe(
      map(data => {
        return data;
      }))
    }

  getBucketlists(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseurl}bucketlists/`);
      }
        
  }

