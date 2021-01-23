import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { CardSizeDirective } from './directives/card-size.directive';

@NgModule({
  declarations: [NavigationComponent, UserProfileComponent, UserInformationComponent, CardSizeDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [CommonModule, NavigationComponent, UserProfileComponent, MatDividerModule, ReactiveFormsModule, MatSnackBarModule, UserInformationComponent, CardSizeDirective ]
})
export class SharedModule { }
