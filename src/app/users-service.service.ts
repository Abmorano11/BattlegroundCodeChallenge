import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  private userList: any;
  public getUserList() {
    if (!this.userList.length) {
      this.getUsers().subscribe((value) =>  {
        console.log(value);
        this.userList = value;
      }).unsubscribe();
    }
    return this.userList;
  }
  private getUsers() {
    return this.http.get(`${environment.baseUrl}/users`)
  }
}
