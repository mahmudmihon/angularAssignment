import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getAuthorizationToken() {
    return 'auth-token';
  }
}
