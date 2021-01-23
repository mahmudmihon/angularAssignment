import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from '../../../../shared/models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  loginInfo: Login;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required]],
      rememberMe: ['']
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(data){
    this.loginService.searchUserByEmailAndPassword(data.email, data.password).subscribe(res => {
      if(res[0] != null){
        this.loginInfo = res[0];

        sessionStorage.setItem('id', this.loginInfo.id.toString());
        
        if(this.loginInfo.role === 'admin'){
          sessionStorage.setItem('role', 'admin');
          this.router.navigate(['/admin']);
        }
        else{
          sessionStorage.setItem('role', 'user');
          this.router.navigate(['/user']);
        }
      } else {
        this.showInvalidMessage();
      }
    })
  }

  showInvalidMessage() {
    this.snackBar.open('INVALID EMAIL OR PASSWORD!', ' ', {
      duration: 1000,
      panelClass: ['mat-toolbar', 'mat-warn'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
