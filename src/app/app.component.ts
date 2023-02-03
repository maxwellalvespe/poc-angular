import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'review';

  users!: User[]

  constructor(private service : UserService){}

  ngOnInit(): void {
   this.service.getUsers()
  }

  getUser(){
    this.service.getUsers().subscribe( u => u.forEach(i => this.users = u));
    console.log(this.users)
  }

}
