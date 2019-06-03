import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { UsersComponent } from './componets/users/users.component';
import { UserDeatilsComponent } from './componets/user-details/user-deatils/user-deatils.component';


const routes: Routes = [
  { path: '', redirectTo: '/app-users', pathMatch: 'full'},
  { path: 'app-users', component: UsersComponent },
  { path: 'app-user-deatils', component: UserDeatilsComponent, canActivate:[AuthGuard] }

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
