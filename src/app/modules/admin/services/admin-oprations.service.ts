import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserInformation } from 'src/app/shared/models/userInfo';
import { BaseURL } from 'src/app/shared/services/baseURL';

@Injectable({
  providedIn: 'root'
})
export class AdminOprationsService extends BaseURL {

  constructor(private http: HttpClient) {
    super();
   }

  allUsersList(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(`${this.infoUrl}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }

  deleteLoginById(id: number): Observable<any> {
    return this.http.delete(`${this.loginsUrl}/${id}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }

  deleteInfoById(id: number): Observable<any> {
    return this.http.delete(`${this.infoUrl}/${id}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }
}
