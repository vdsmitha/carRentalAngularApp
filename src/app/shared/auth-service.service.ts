import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
user=new Subject<User>();
  constructor(private httpClient:HttpClient) { }
  signup(user:User){
    let url='http://localhost:8080/hirewheels/v1/users';
    return this.httpClient.post(url,user);
  }

  saveUser(user:User){
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('token',user.jwtToken);
  }

  login(credentials):Observable<User>{
    let url='localhost:8080/hirewheels/v1/users/access-token';
    return this.httpClient.post<User>(url,credentials).pipe(catchError(this.errorHandler),
    tap((response:User)=>{
      this.saveUser(response);
      this.user.next(response);
    }));
  }

  private errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'Error!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    if (errorRes.error && errorRes.error.error) {
      errorMessage = errorRes.error.error;
    }

    return throwError(errorMessage);
  }

  getToken(){
    return localStorage.getItem('token');
}
}
