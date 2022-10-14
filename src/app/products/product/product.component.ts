import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServce } from 'src/app/services/product.service';
import { CompanyService } from 'src/app/services/company.service';
import { AuthToken } from 'src/interfaces/token';
import jwt_decode from 'jwt-decode';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  userName! : string
  userType! : string;
  userId = 0;
  productID = 0;
  product! : Observable<any>;
  productToReturn! : any;
  notification = false;

  constructor(
    private route: ActivatedRoute,
    private productService : ProductServce,
    private clientService : ClientService,
    private companyService : CompanyService
  ) { }

  public changeTheme() : void{
    var type = localStorage.getItem('Theme');
    var background = document.getElementsByTagName('button');
    if(type == 'White' || type == null){
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'white'
          v.style.backgroundColor = 'black';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'white';
          button.style.backgroundColor = "#3A3B3C";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "#3A3B3C";
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'white';
          pagination.style.backgroundColor = "#3A3B3C";
          pagination.style.borderRadius = '5px';
        }
      }
      var productInformations = document.getElementById('product-informations-container');
      if(productInformations){
        productInformations.style.backgroundColor = "#3A3B3C"
      }
      productInformations = document.getElementById('actualImage');
      if(productInformations){
        productInformations.style.backgroundColor = "#3A3B3C"
      }
      var reviews = document.getElementsByClassName('review');
      for(let i = 0; i < reviews.length; i++){
        var review = reviews[i] as HTMLElement;
        review.style.backgroundColor = '#3A3B3C'
      }
      localStorage.setItem('Theme', 'Black')
    }
    else{
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'black'
          v.style.backgroundColor = 'white';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'black';
          button.style.backgroundColor = "darkgray";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "darkgray";
      }
      var productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;
      if(productsCard){
        for(let i = 0; i < productsCard.length; i++){
          var productCard = productsCard[i]
          productCard.style.color = 'black';
          productCard.style.backgroundColor = "gray";
        }
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'black';
          update.style.backgroundColor = "silver";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'black';
          pagination.style.backgroundColor = "white";
          pagination.style.borderRadius = '5px';
        }
      }
      var productInformations = document.getElementById('product-informations-container');
      if(productInformations){
        productInformations.style.backgroundColor = "gray"
      }
      productInformations = document.getElementById('actualImage');
      if(productInformations){
        productInformations.style.backgroundColor = "gray"
      }
      var reviews = document.getElementsByClassName('review');
      for(let i = 0; i < reviews.length; i++){
        var review = reviews[i] as HTMLElement;
        review.style.backgroundColor = 'gray'
      }
      var notifications = document.getElementsByClassName('notification')
      for(let i = 0; i < notifications.length; i++){
        var notification = notifications[i] as HTMLElement
        notification.style.backgroundColor = 'darkgrey'
      }
      var bar = document.getElementById('notificationFooter');
      if(bar){
        bar.style.backgroundColor = 'darkgrey'
      }
      localStorage.setItem('Theme', 'White')
    }
  }

  public setTheme() : void{
    var type = localStorage.getItem('Theme');
    var background = document.getElementsByTagName('button');
    if(type == 'Black'){
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'white'
          v.style.backgroundColor = 'black';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'white';
          button.style.backgroundColor = "#3A3B3C";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "#3A3B3C";
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'white';
          update.style.backgroundColor = "#3A3B3C";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'white';
          pagination.style.backgroundColor = "#3A3B3C";
          pagination.style.borderRadius = '5px';
        }
      }
      var productInformations = document.getElementById('product-informations-container');
      if(productInformations){
        productInformations.style.backgroundColor = "#3A3B3C"
      }
      productInformations = document.getElementById('actualImage');
      if(productInformations){
        productInformations.style.backgroundColor = "#3A3B3C"
      }
      var reviews = document.getElementsByClassName('review');
      for(let i = 0; i < reviews.length; i++){
        var review = reviews[i] as HTMLElement;
        review.style.backgroundColor = '#3A3B3C'
      }
    }
    else{
      var body = document.getElementsByTagName('body');
      if(body){
        for(let i = 0; i < body.length; i++){
          var v = body[i]
          v.style.color = 'black'
          v.style.backgroundColor = 'white';
        }
      }
      if(background){
        for(let i = 0; i < background.length; i++){
          var button = background[i]
          button.style.color = 'black';
          button.style.backgroundColor = "darkgray";
        }
      }
      var menu = document.getElementById('menu');
      if(menu){
        menu.style.backgroundColor = "darkgray";
      }
      var productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;
      if(productsCard){
        for(let i = 0; i < productsCard.length; i++){
          var productCard = productsCard[i]
          productCard.style.color = 'black';
          productCard.style.backgroundColor = "gray";
        }
      }
      var footer = document.getElementsByTagName('footer') as HTMLCollectionOf<HTMLElement>;
      if(footer){
        for(let i = 0; i < footer.length; i++){
          var update = footer[i]
          update.style.color = 'black';
          update.style.backgroundColor = "silver";
        }
      }
      var paginationTheme = document.getElementsByTagName('a');
      if(paginationTheme){
        for(let i = 0; i < paginationTheme.length; i++){
          var pagination = paginationTheme[i]
          pagination.style.color = 'black';
          pagination.style.backgroundColor = "white";
          pagination.style.borderRadius = '5px';
        }
      }
      var productInformations = document.getElementById('product-informations-container');
      if(productInformations){
        productInformations.style.backgroundColor = "gray"
      }
      productInformations = document.getElementById('actualImage');
      if(productInformations){
        productInformations.style.backgroundColor = "gray"
      }
      var reviews = document.getElementsByClassName('review');
      for(let i = 0; i < reviews.length; i++){
        var review = reviews[i] as HTMLElement;
        review.style.backgroundColor = 'gray'
      }
    }
  }

  openNotifications(){
    this.notification = !this.notification;
  }

  ngOnInit(): void {

    var not = document.getElementById('openNot');
    console.log(not);
    if(not){
      not.addEventListener('click', () => this.openNotifications());
    }

    this.route.params.forEach(
      param => {
        this.productID = param['id']
      })
    
    this.product = this.productService.getProductByID(this.productID)

    document.getElementById("switch")?.addEventListener("click", this.changeTheme);
    if(localStorage.getItem('Theme') == 'Black'){
      var button = document.getElementById('check') as HTMLInputElement
      button.checked = true
    }
    setTimeout(() => this.setTheme(),100);

    var token = localStorage.getItem('token');
    if(token != null){

      var decode = jwt_decode<AuthToken>(token.toString())
      
      this.userType = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      this.userName = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
    }
    if(this.userType == 'Client'){
      this.clientService.getClientByName(this.userName).subscribe(rez => this.userId = rez.clientProfileId)
    }
    if(this.userType == 'Company'){
      this.companyService.getCompanyByName(this.userName).subscribe(rez => this.userId = rez.companyProfileId)
    }
  }

}
