import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProfileOperationsService } from 'src/app/shared/services/profile-operations.service';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent implements OnInit {

  userId: number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private profileService: ProfileOperationsService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.data[0];
  }
}
