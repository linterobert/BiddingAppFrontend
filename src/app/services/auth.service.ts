import { Injectable } from '@angular/core';
import { AuthToken } from 'src/interfaces/token';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=false
  constructor() { }

  isAuthenticated(){
    var token = localStorage.getItem('token');
    if(token != null){
      if(token != ""){

        var decode = jwt_decode<AuthToken>(token.toString())
        
        if(decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Client'){
          this.isLoggedIn = true;
        }
      }
      
    }
    return this.isLoggedIn;
  }
}
