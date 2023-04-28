import { Component , OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
  users: User[] = new Array;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Failed to fetch users:', error);
      }
    );
  }

}
