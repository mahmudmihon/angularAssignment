import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, find } from 'rxjs/operators';
import { UserInformation } from 'src/app/shared/models/userInfo';
import { BaseURL } from 'src/app/shared/services/baseURL';
import { Login } from '../../../shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService extends BaseURL {
  logins: Login[];
  emailExist: Boolean;
  
  constructor(private http: HttpClient) {
    super();
   }

  addLoginInfo(info: Login): Observable<Login> {
    return this.http.post<Login>(this.loginsUrl, info, this.httpOptions).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }

  addUserInfo(info: UserInformation): Observable<UserInformation> {
    
    return this.http.post<UserInformation>(this.infoUrl, info, this.httpOptions).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }

  getUsers(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(this.infoUrl).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }

  searchUserByEmail(email: string): Observable<Login[]> {
    email = encodeURIComponent(email);
    return this.http.get<Login[]>(`${this.loginsUrl}/?email=${email}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }
}
