import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserInformation } from 'src/app/shared/models/userInfo';
import { passwordMatch } from 'src/app/shared/validators/matchPassword.validator';
import { Login } from '../../../../shared/models/login';
import { UserRegistrationService } from '../../services/user-registration.service';
import { UniqueEmailService } from '../../services/unique-email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm;
  private profilePicture = 'https://i.ibb.co/y888cqN/man.png';
  private role = 'user';
  private loginInfo: Login;
  private userInfo: UserInformation;
  private userId: number;
  
  constructor(private formBuilder: FormBuilder, private registrationService: UserRegistrationService, private emailService: UniqueEmailService,
    private router: Router) {
    this.userId = Math.floor(1000 + Math.random() * 9000);
   }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{2,}$")]],
      lastName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{2,}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")], this.emailService.emailValidator()],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
          validator: passwordMatch('password', 'confirmPassword')
    });
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  onSubmit(data){
    this.addLoginInfo(data.email, data.confirmPassword);
    this.addUserInfo(data.firstName, data.lastName);
  }

  addLoginInfo(email: string, password: string) {
    this.loginInfo = new Login();

    this.loginInfo.id = this.userId;
    this.loginInfo.email = email
    this.loginInfo.password = password
    this.loginInfo.role = this.role;

    this.registrationService.addLoginInfo(this.loginInfo).subscribe();
  }

  addUserInfo(first: string, last: string) {
    this.userInfo = new UserInformation();

    this.userInfo.id = this.userId;
    this.userInfo.profilePicture = this.profilePicture;
    this.userInfo.fullName = first + ' ' + last;
    
    this.registrationService.addUserInfo(this.userInfo).subscribe(() => {
      this.router.navigate(['./']);
    });
  }
}
