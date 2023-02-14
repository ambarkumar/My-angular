import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserInfo } from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthDetailService {
  subscribe(arg0: (response: UserInfo) => void) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  
  // public getUsers(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users?page=1';
  //   return this.http.get(url);
  // }

  public saveUser(user: User): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url, user);
  }

  public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
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
