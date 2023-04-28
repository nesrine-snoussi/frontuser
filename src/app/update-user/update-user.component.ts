import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser(this.user.id).subscribe(
      users => {
        this.user = this.user;
      },
      error => {
        console.error('Failed to fetch user: ', error);
      }
    );
  }

  onUpdateUser() {
    this.userService.updateUser(this.user).subscribe(
      updatedUser => {
        console.log('User updated:', updatedUser);
        // Handle success case, e.g., show a success message
      },
      error => {
        console.error('Failed to update user:', error);
        // Handle error case, e.g., show an error message
      }
    );
  }
  onSubmit() {
    console.log(this.user)
  }


  editUser(userId: number) {
    // Fetch user data from the database based on user ID
    this.userService.getUser(userId).subscribe(
      (response) => {
        this.user = response; // Assuming response is the fetched user data
      },
      (error) => {
        console.error('Failed to fetch user data:', error);
      }
    );
  }
}
