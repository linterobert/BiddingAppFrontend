import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Validators } from '@angular/forms';
import { loginToken } from 'src/interfaces/loginToken';
import { AuthToken } from 'src/interfaces/token';
import jwt_decode from 'jwt-decode';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  matcher = new MyErrorStateMatcher();

  registerForm! : FormGroup;
  errorComponent = false;
  

  constructor(
    private loginService : LoginService,
    private af: AngularFireStorage,
    private formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    })
  }
  redirectRegister(){
    window.location.href = 'http://localhost:4200/register'
  }
  login(){
    this.loginService.Login(this.registerForm.value['username'], this.registerForm.value['password']).subscribe(
      rez =>  {
        var toReturn = rez as loginToken
        localStorage.setItem('token', toReturn.token)
        localStorage.setItem('expiration', toReturn.expiration)

        var token = localStorage.getItem('token')
        if(token){
          var decode = jwt_decode<AuthToken>(token.toString())
        
          if( decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Client'){
            window.location.href = 'http://localhost:4200/client-profile';
          }
          if( decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == 'Company' ){
            window.location.href = 'http://localhost:4200/company-profile';
            
          }
        }
      },
      error => {
        this.errorComponent = true;
      }
      
    )
  }
}
