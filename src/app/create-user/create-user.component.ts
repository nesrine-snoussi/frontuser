import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { NgModel } from '@angular/forms';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService) { }
  ngOnInit(): void { }

  saveUser() {
    this.userService.createUser(this.user).subscribe(
      data => console.log(data),
      error => console.log(error));


  }

  onSubmit() {
    console.log(this.user)
  }

}
