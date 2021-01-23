import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserInformation } from 'src/app/shared/models/userInfo';
import { ProfileOperationsService } from 'src/app/shared/services/profile-operations.service';

@Injectable({
  providedIn: 'root'
})
export class UserIdResolverService implements Resolve<any> {

  constructor(private router: Router , private userInfoService: ProfileOperationsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
    let id = parseInt(route.paramMap.get('id'));
    console.log("edit-id " + id);

    return this.userInfoService.getUserInformationById(id).pipe(map(data => {
      if(data) {
        console.log(data);
        return id;
      } else {
        this.router.navigate(['/admin']);
        return null;
      }
    }),
    catchError(err => {
      this.router.navigate(['/admin']);
      return throwError(err);
    }))
  }
}
