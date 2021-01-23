import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserInformation } from 'src/app/shared/models/userInfo';
import { AdminOprationsService } from '../../services/admin-oprations.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userInformations: UserInformation[];
  adminId: number;
  displayedColumns: string[] = ['userImage', 'fullName', 'gender', 'phone', 'address', 'Actions'];
  dataSource: MatTableDataSource<UserInformation>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private adminOperations: AdminOprationsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.adminId = parseInt(sessionStorage.getItem('id'));
    this.getUsersList();
  }

  getUsersList() {
    this.adminOperations.allUsersList().subscribe(res => {
      this.userInformations = res.filter(x => x.id !== this.adminId);
      this.dataSource = new MatTableDataSource(this.userInformations);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteUserById(id: number){
    this.adminOperations.deleteLoginById(id).subscribe(() => {
      this.adminOperations.deleteInfoById(id).subscribe(() => {
        this.getUsersList();
        this.showDeleteConfirmation();
      })
    })
  }

  showDeleteConfirmation() {
    this.snackBar.open('User Deleted!', ' ', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
