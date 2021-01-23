import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserInformation } from '../../models/userInfo';
import { ProfileOperationsService } from '../../services/profile-operations.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  @Input() userId: number;
  userInfo: UserInformation;
  informationChnageForm;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private profileService: ProfileOperationsService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUserInfoById();
  }

  getUserInfoById() {
    this.profileService.getUserInformationById(this.userId).subscribe(res => {
      this.userInfo = res;
      console.log(this.userInfo);
      this.createInformationChangeForm();
    })
  }

  createInformationChangeForm() {
    this.informationChnageForm = this.formBuilder.group({
      fullName: [this.userInfo.fullName, [Validators.required, Validators.pattern("^[a-zA-Z]{2,} [a-zA-Z]{2,}$")]],
      gender: [this.userInfo.gender, [Validators.required]],
      dob: [this.userInfo.dob, [Validators.required]],
      phone: [this.userInfo.phone, [Validators.required, Validators.pattern("^01[0-9]{9}$")]], 
      address: [this.userInfo.address, [Validators.required]]
    });
  }

  get fullName() {
    return this.informationChnageForm.get('fullName');
  }

  get gender() {
    return this.informationChnageForm.get('gender');
  }

  get dob() {
    return this.informationChnageForm.get('dob');
  }

  get phone() {
    return this.informationChnageForm.get('phone');
  }

  get address() {
    return this.informationChnageForm.get('address');
  }

  onInfoChangeSubmit(data) {
    this.userInfo.fullName = data.fullName;
    this.userInfo.gender = data.gender;
    this.userInfo.dob = data.dob;
    this.userInfo.phone = data.phone;
    this.userInfo.address = data.address;

    console.log(this.userInfo);
    this.profileService.updateUserInformation(this.userInfo).subscribe(() => {
      this.showInfoChangeConfirmation();
    });
  }

  showInfoChangeConfirmation() {
    this.snackBar.open('Information Updated!', ' ', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
