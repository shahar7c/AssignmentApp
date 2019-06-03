import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = false; 

  constructor() { }

  setAuth(auth:boolean){
    this.auth = auth;
  }

  getAuth(){
    return this.auth;
  }
}
