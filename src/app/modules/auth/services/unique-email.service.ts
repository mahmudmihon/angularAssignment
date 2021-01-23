import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {  AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserRegistrationService } from './user-registration.service';

@Injectable({
  providedIn: 'root'
})

export class UniqueEmailService {

    constructor(private registrationService: UserRegistrationService) {}
  
    emailValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return this.registrationService.searchUserByEmail(control.value).pipe(
          map(res => {
            return res[0] != null ? { emailExists: true } : null;
          })
        );
      };
    }
  }