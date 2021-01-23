import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseURL } from 'src/app/shared/services/baseURL';
import { Login } from '../../../shared/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseURL {
  
  constructor(private http: HttpClient) { 
    super();
  }

  searchUserByEmailAndPassword(email: string, password: string): Observable<Login[]> {
    email = encodeURIComponent(email);
    password = encodeURIComponent(password);
    
    return this.http.get<Login[]>(`${this.loginsUrl}/?email=${email}&password=${password}`).pipe(
      catchError(err => 
        {
          return throwError(err);
        })
    );
  }
}
