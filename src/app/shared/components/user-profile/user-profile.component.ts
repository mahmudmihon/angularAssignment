import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Login } from '../../models/login';
import { UserInformation } from '../../models/userInfo';
import { ProfileOperationsService } from '../../services/profile-operations.service';
import { passwordMatch } from '../../validators/matchPassword.validator';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userId: number;
  userInfo: UserInformation;
  loginInfo: Login;
  passwordChangeForm;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private profileService: ProfileOperationsService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.userId = parseInt(sessionStorage.getItem('id'));
   }

  ngOnInit(): void {
    this.getLoginInfoById();
    this.getUserInfoById();
    this.createPasswordChangeForm();
  }

  getLoginInfoById() {
    this.profileService.getUserLoginById(this.userId).subscribe(res => {
      this.loginInfo = res;
    })
  }

  getUserInfoById() {
    this.profileService.getUserInformationById(this.userId).subscribe(res => {
      this.userInfo = res;
    })
  }

  createPasswordChangeForm() {
    this.passwordChangeForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
          validator: passwordMatch('password', 'confirmPassword')
    });
  }

  get password() {
    return this.passwordChangeForm.get('password');
  }

  get confirmPassword() {
    return this.passwordChangeForm.get('confirmPassword');
  }

  onChangeSubmit(data){
    this.loginInfo.password = data.confirmPassword;

    this.profileService.updateUserLoginInfo(this.loginInfo).subscribe(() => {
      this.passwordChangeForm.reset();
      this.showPassChangeConfirmation();
    })
  }

  showPassChangeConfirmation() {
    this._snackBar.open('Password Chnaged!', ' ', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
