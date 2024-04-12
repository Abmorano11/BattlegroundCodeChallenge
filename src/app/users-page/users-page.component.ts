import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss'
})
export class UsersPageComponent implements OnInit{
  public data = [];
  constructor(
    public userService: UsersService
  ) {}
  ngOnInit(): void {
    this.data = this.userService.getUserList();
  }
}
