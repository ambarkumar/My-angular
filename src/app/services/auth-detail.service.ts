import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataModel } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthDetailService {
 
  constructor(private http: HttpClient) {}
  
  // public getUsers(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users?page=1';
  //   return this.http.get(url);
  // }

  // public saveUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url, user);
  // }

  public saveUserTyped(data: dataModel): Observable<dataModel> {
    const url = 'http://localhost:3000/posts';
    return this.http.post<dataModel>(url, data);
  }


  // public saveUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url, user);
  // }

  // public saveUsers(user: User): Observable<UserInfo> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<UserInfo>(url, user);
  // }
}
