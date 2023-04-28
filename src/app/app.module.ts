import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModel } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetUserByRoleComponent } from './get-user-by-role/get-user-by-role.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginuserComponent } from './loginuser/loginuser.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    CreateUserComponent,
    FooterComponent,
    GetAllUsersComponent,
    UpdateUserComponent,
    GetUserByRoleComponent,
    SidebarComponent,
    LoginuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
