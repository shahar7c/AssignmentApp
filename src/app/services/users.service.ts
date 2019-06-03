import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private urlUsers = 'https://jsonplaceholder.typicode.com/users';

  userId:string;

  constructor(private http: HttpClient) { }

  getUserId(){
    return this.userId;
  }

  setUserId(id:string){
    this.userId = id;
  }

  addUser(users:User[], user:User): User[]{
    users.unshift(user);
    return users;
  }

  deleteUser(users:User[], id:string): User[]{
    let length = users.length;
    for(let i=0; i<length; i++){
      if(users[i].id == id){
        users.splice(i,1);
        return users;  
      }  
    }
    return users;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers);
  }

  getUserDetails():Observable<User> {
    return this.http.get<User>(this.urlUsers + '/' + this.userId);
  }

    // updateUser(users:User[], user:User): User[]{
  //   for(let i=0; i<users.length; i++){
  //     if(users[i].id == user.id){
  //         users[i].name = user.name;
  //         users[i].email = user.email;
  //         users[i].address.suite = user.address.suite;
  //         users[i].address.zipcode = user.address.zipcode;
  //         users[i].address.city = user.address.city;
  //         users[i].user.address.street = user.address.street;
  //         users[i].phone = user.phone;
  //         users[i].website = user.website;
  //         users[i].company.name = user.company.name;
  //         users[i].company.catchPhrase = user.company.catchPhrase;
  //         users[i].company.bs = user.company.bs;       
  //       return users;   
  //     }
  //   }
  //   return users;
  // }
}
