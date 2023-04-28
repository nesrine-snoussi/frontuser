import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl = 'http://localhost:9090/User/addUser';
   loginUrl = 'http://localhost:9090/login' ;
   apiUrl = 'http://localhost:9090/User/' ;
   

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    })
  };
  
  constructor(private httpclient: HttpClient) { 
    
  }

  public login(loginData: any) {
    return this.httpclient.post(this.loginUrl, loginData); 
  }

  public createUser(user: User) {
    console.log(user)
    return this.httpclient.post(this.baseUrl , user) ; 
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.apiUrl);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}/${user.id}`; // Assuming the backend API uses the user's ID in the URL for updating
    return this.httpclient.put<User>(url, user);
  }

  getUser(userId: number): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.httpclient.get<User>(url);
  }

  
}