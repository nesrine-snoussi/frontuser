import { Component } from '@angular/core';
import { AccessTokenResponse } from '../AccessTokenResponse';
import { UserloginService } from '../userlogin.service';
import { User } from '../model/User';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent {
  username!: string;
  password!: string;
  accessToken!: string;
  userId:any;
  constructor(private userService: UserloginService) { }
  user: User = new User();

  ngOnInit(): void {
    // const userId = this.yourService.getUserIdFromToken();
    // console.log('User id:', userId);

  }

  onSubmit(username: string, password: string) {
    
    this.userService.login(username, password).subscribe(response => 
      console.log (response)
      
      // handle successful login
    );
  }
  
}
