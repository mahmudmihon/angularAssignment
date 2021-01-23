import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from 'src/app/shared/components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfoEditComponent } from './components/info-edit/info-edit.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserIdResolverService } from './resolvers/user-id-resolver.service';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path : 'profile', component : UserProfileComponent },
      { path: 'info-edit/:id', component: InfoEditComponent, resolve: [ UserIdResolverService ] },
      { path : '', component : UsersListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
