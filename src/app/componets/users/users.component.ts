import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { usersState } from 'src/app/store/reducers/users.reducer';
import { AppState } from 'src/app/app.state';


import { FormControl ,FormGroup ,FormBuilder} from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  searchText;
  users:User[];
  DisplayUsers:number;
  toogleForm: FormGroup;
  addUserForm : FormGroup;
  updateUserForm: FormGroup;

  constructor(private service:UsersService,
              private autoService: AuthService,
              private route:Router,
              private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.toogleForm = new FormGroup({
      'toggle': new FormControl(true)
     })

     this.addUserForm = this.formBuilder.group({
      user: '',
      name:'',
      email: '',
      city: '',
      street: '',
      suite: '',
      zipcode: '',
      website: '',
      phone: '',
      companyName: '',
      catchPhrase: '',
      bs: ''
    })

    this.updateUserForm = this.formBuilder.group({
      user: '',
      name:'',
      email: '',
      city: '',
      street: '',
      suite: '',
      zipcode: '',
      website: '',
      phone: '',
      companyName: '',
      catchPhrase: '',
      bs: ''
    })

    this.DisplayUsers=0;
    this.getUsers();
  }

  check(){
    if(this.toogleForm.value.toggle == false) //admin
      this.autoService.setAuth(false);   
    else 
      this.autoService.setAuth(true);
  }

  getUsers(){
     this.service.getUsers().subscribe(
       res => {
        this.users = res;
       } 
     );
  }

  deleteUser(userid:string){
    this.users = this.service.deleteUser(this.users, userid);
  }

  addUser(){
      this.users = this.service.addUser(this.users,
        {
          "id":"",
          "name": this.addUserForm.value.name,
          "username": this.addUserForm.value.user,
          "email": this.addUserForm.value.email,
          "address": {
            "street": this.addUserForm.value.street,
            "suite": this.addUserForm.value.suite,
            "city": this.addUserForm.value.city,
            "zipcode": this.addUserForm.value.zipcode,
            "geo": {
              "lat": "",
              "lng": ""
            }
          },
          "phone": this.addUserForm.value.phone,
          "website": this.addUserForm.value.website,
          "company": {
          "name": this.addUserForm.value.companyName,
          "catchPhrase": this.addUserForm.value.catchPhrase,
          "bs": this.addUserForm.value.bs,
          }
        }
    );
    this.addUserForm.reset();
  }


  userDetails(userId:string){
    this.service.setUserId(userId);
    this.route.navigate(['/app-user-deatils']);
  }


  nextUsers(){
    if(Object.keys(this.users).length>this.DisplayUsers + 5)
      this.DisplayUsers=this.DisplayUsers+5;
  }

  previousUsers(){
    if(this.DisplayUsers-5<0)
      this.DisplayUsers=0;
    else this.DisplayUsers=this.DisplayUsers-5;
  }


//   updateUser(id:string){
//     this.users = this.service.updateUser(this.users,
//       {
//         "id":id,
//         "name": this.updateUserForm.value.name,
//         "username": this.updateUserForm.value.user,
//         "email": this.updateUserForm.value.email,
//         "address": {
//           "street": this.updateUserForm.value.street,
//           "suite": this.updateUserForm.value.suite,
//           "city": this.updateUserForm.value.city,
//           "zipcode": this.updateUserForm.value.zipcode,
//           "geo": {
//             "lat": "",
//             "lng": ""
//           }
//         },
//         "phone": this.updateUserForm.value.phone,
//         "website": this.updateUserForm.value.website,
//         "company": {
//         "name": this.updateUserForm.value.companyName,
//         "catchPhrase": this.updateUserForm.value.catchPhrase,
//         "bs": this.updateUserForm.value.bs,
//         }
//       }
//   );
// }


}

