import { Conditional } from '@angular/compiler';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatBadgeModule } from "@angular/material/badge";
import { Input } from '@angular/core';
import { AuthToken } from 'src/interfaces/token';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectStore(){
    window.location.href = "http://localhost:4200/products/1"
  }
  redirectAccount(){
    var token = localStorage.getItem('token');
    if(token != null){
      if(token != ""){

        var decode = jwt_decode<AuthToken>(token.toString())
        
        if(decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Client'){
          window.location.href = "http://localhost:4200/client-profile"
          return;
        }
        if(decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Company'){
          window.location.href = "http://localhost:4200/company-profile"
          return;
        }
      }
      
    }
    window.location.href="http://localhost:4200/login"
  }

}
