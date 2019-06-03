import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { Post } from '../../../models/post.modal';
import { UsersService } from '../../../services/users.service';
import { PostsService } from '../../../services/posts.service';



@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDeatilsComponent implements OnInit {

  userDetails:User;
  posts: Post[];

  constructor(private serviceUsers: UsersService,
              private servicePosts: PostsService) { }

  ngOnInit() {
    this.getUsersDetails();
    this.getUserPosts();  
  }


  getUsersDetails(){
    this.serviceUsers.getUserDetails().subscribe(
      res => {
        this.userDetails = res;
      }
    );
  }

  getUserPosts(){
    let id = this.serviceUsers.getUserId();
    this.servicePosts.getUserPosts(id).subscribe(
      resPost => {
        this.posts = resPost;
      }
    );  
  }
}
