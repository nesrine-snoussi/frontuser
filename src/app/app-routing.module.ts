import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetUserByRoleComponent } from './get-user-by-role/get-user-by-role.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginuserComponent } from './loginuser/loginuser.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'loginuser' , component:LoginuserComponent},
  {path:'login' , component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent},
  {path:'user', component:UserComponent},
  {path:'addUser', component:CreateUserComponent},
  {path:'allUser', component:GetAllUsersComponent},
  {path:'updateUser', component:UpdateUserComponent},
  {path:'UsersManagment', component:GetUserByRoleComponent},
  {path:'Sidebar', component:SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
