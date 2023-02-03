import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  displayedColumns: string[] = ['position', 'nome', 'cpf', 'email'];

  users !: User[]

  id: number = 100
  constructor(private service: UserService) {
    this.getUser();
  }
  ngOnInit(): void {
    this.getUser()
  }



  getUser() {
    this.service.getUsers().subscribe(u => u.forEach(i => this.users = u));
  }
}
