import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path:string = 'http://localhost:8080/api/users'

  constructor(private http : HttpClient) { }

  getUsers(): Observable<User[]>{
    return   this.http.get<User[]>(this.path);
  }

  postUser(usuario :User){
    this.http.post(this.path,usuario)
  }
}
