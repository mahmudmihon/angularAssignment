import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
