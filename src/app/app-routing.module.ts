import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';
import { UserAuthGuard } from './shared/guards/userauth.guard';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'user', 
    loadChildren : () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate : [UserAuthGuard]
  },
  {
    path : 'admin',
    loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate : [AdminAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
