import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from '../models/login';
import { UserInformation } from '../models/userInfo';
import { BaseURL } from './baseURL';

@Injectable({
  providedIn: 'root'
})
export class ProfileOperationsService extends BaseURL {

  constructor(private http: HttpClient) {
    super();
    
   }

   getUserInformationById(userId: number): Observable<UserInformation> {
      return this.http.get<UserInformation>(`${this.infoUrl}/${userId}`).pipe(
        catchError(err => 
          {
            return throwError(err);
          })
      );
   }

   getUserLoginById(userId: number): Observable<Login> {
    return this.http.get<Login>(`${this.loginsUrl}/${userId}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
   }

   updateUserLoginInfo(infoToUpdate: Login): Observable<any> {
    return this.http.put(`${this.loginsUrl}`, infoToUpdate, this.httpOptions).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
   }

   updateUserInformation(infoToUpdate: UserInformation): Observable<any> {
    return this.http.put(`${this.infoUrl}`, infoToUpdate, this.httpOptions).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
   }
}
