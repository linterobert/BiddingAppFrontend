import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AngularFireStorage} from '@angular/fire/compat/storage'
import { FormBuilder } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { AuthToken } from 'src/interfaces/token';
import { LoginService } from 'src/app/services/login.service';
import { ClientService } from 'src/app/services/client.service';
import { CompanyService } from 'src/app/services/company.service';
import { PostClient } from 'src/interfaces/postClient';
import { PostCompany } from 'src/interfaces/postCompany';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  path!: String
  images : any[] = [];
  url : any;
  registerForm! : FormGroup;
  submitted = false;
  isSuccessful! : boolean;
  error = false;
  @ViewChild('accountType') accountType!: ElementRef
  type = ""
  matcher = new MyErrorStateMatcher();

  constructor(
    private af: AngularFireStorage,
    private formBuilder : FormBuilder,
    private loginService : LoginService,
    private clientService : ClientService,
    private companyService  : CompanyService
  ) { }

  removeImage(image : any){
    this.images = this.images.filter(obj => obj.photo !== image.photo);
  }
  onFileSelected($event : any){
    var file = new FileReader();
    file.readAsDataURL($event.target.files[0])
    file.onload=(event:any) =>{
      this.images = [];
      this.images.push({photo: event.target.result, image: $event.target.files[0]})
    }
    this.path = $event.target.files[0];
  }
  addData(productId : number){
    for(let image of this.images){
      this.path = image.image;
      this.af.upload("/productImages"+ Math.random()+this.path, this.path).then(data => {
        })
    }
  }
  onSelected():void {
		this.type = this.accountType.nativeElement.value;
	}

  register(){
    this.loginService.Auth(this.registerForm.value['username'], this.registerForm.value['password']).subscribe(rez =>{
      this.loginService.SetRole(this.registerForm.value['username'], this.registerForm.value['type']).subscribe(rez =>{
        this.path = this.images[0].image;
        this.af.upload("/clientPhoto"+ Math.random()+this.path, this.path).then(data => {
          data.ref.getDownloadURL().then(urlToReturn => {
            if(this.registerForm.value['type'] == 'Client'){
              var postClient : PostClient = {
                clientName: this.registerForm.value['username'],
                profilePhoto: urlToReturn
              }
              this.clientService.postClient(postClient).subscribe(rez => window.location.href = "http://localhost:4200/login");
            }
            else{
              var postCompany : PostCompany = {
                companyName: this.registerForm.value['username'],
                iban: this.registerForm.value['iban'],
                profilePhoto: urlToReturn
              }
              this.companyService.postCompany(postCompany).subscribe(rez => window.location.href = "http://localhost:4200/login");
            }
          })})
        
      })
    })
  }
  login(){
    window.location.href='http://localhost:4200/login'
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
      iban: ['', Validators.required]
    })

  }

}
