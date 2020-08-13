import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];

  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

  search(query: string) {
    this.usersList = this.usersService.findUser(query);
  }

  sort(direction: string) {
    this.usersList = this.usersService.sortUsers(direction);
  }
}
