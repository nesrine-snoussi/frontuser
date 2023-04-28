import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccessTokenResponse } from './AccessTokenResponse';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private loginUrl = 'http://localhost:9090/login'; 
  private apiURL = 'http://localhost:9090/user';
  private us="";
  user: User = new User();


  constructor(private http:HttpClient) { }
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'multipart/form-data',
  //   })
  // };
  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    const headers = { 'content-type': 'application/json' };
    const body = { username, password };
    return this.http.post("http://localhost:9090/login", body,httpOptions);
  }
}
