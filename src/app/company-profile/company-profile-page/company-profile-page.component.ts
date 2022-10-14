import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { CompanyService } from 'src/app/services/company.service';
import { AuthToken } from 'src/interfaces/token';

@Component({
  selector: 'app-company-profile-page',
  templateUrl: './company-profile-page.component.html',
  styleUrls: ['./company-profile-page.component.css']
})
export class CompanyProfilePageComponent implements OnInit {
  company!: Observable<any>
  notification = false
  constructor(
    private companyService : CompanyService
  ) { }

  openNotifications(){
    this.notification = !this.notification;
  }
  ngOnInit(): void {
    var not = document.getElementById('openNot');
    if(not){
      not.addEventListener('click', () => this.openNotifications());
    }

    var token = localStorage.getItem('token');
    if(token != null){

      var decode = jwt_decode<AuthToken>(token.toString())
      
      this.company = this.companyService.getCompanyByName(decode['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'])
    }
  }

}
