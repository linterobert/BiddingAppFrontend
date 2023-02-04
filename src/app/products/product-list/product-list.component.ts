import { Component, NgModule, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductServce } from 'src/app/services/product.service';
import { getProduct } from 'src/interfaces/getProduct';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthToken } from 'src/interfaces/token';
import jwt_decode from 'jwt-decode';
import { ClientService } from 'src/app/services/client.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  notification = false;
  lastPage = 0;
  userName!: any;
  userType!: any;
  userId!: any;

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
      var productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;
      if(productsCard){
        for(let i = 0; i < productsCard.length; i++){
          var productCard = productsCard[i]
          productCard.style.color = 'white';
          productCard.style.backgroundColor = "#3A3B3C";
        }
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
    var background = document.getElementsByTagName('button');
    var type = localStorage.getItem('Theme');
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
      const productsCard = document.getElementsByClassName('product') as HTMLCollectionOf<HTMLElement>;        
      if(productsCard){
        for(let j = 0; j < productsCard.length; j++){
          var productCard = productsCard[j]
          productCard.style.color = 'white';
          productCard.style.backgroundColor = "#3A3B3C";
        }
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
    }
  }

  openNotifications(){
    this.notification = !this.notification;
  }

  changePage(pageNumber : number, type : boolean){
    if(type == false){
      document.location.href = `http://localhost:4200/products/${pageNumber}`
    }
    var box = document.getElementById('page1');
    if(pageNumber > 0){

      box = document.getElementById('page1');
      if(box){
        box.innerHTML = (pageNumber - 1).toString();
        if(pageNumber == 1){
          box.hidden = true
        }
        else{
          box.hidden = false
        }
      }
      box = document.getElementById('page2');
      if(box){
        box.innerHTML = (pageNumber).toString();
      }
      box = document.getElementById('page3');
      if(box){
        box.innerHTML = (pageNumber - (-1)).toString();
        if(pageNumber - (-1) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('page4');
      if(box){
        box.innerHTML = (pageNumber - (-2)).toString();
        if(pageNumber - (-2) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('page5');
      if(box){
        box.innerHTML = (pageNumber - (-3)).toString();
        if(pageNumber - (-3) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
      box = document.getElementById('page6');
      if(box){
        box.innerHTML = (pageNumber - (-4)).toString();
        if(pageNumber - (-4) <= this.lastPage){
          box.hidden = false
        }
        else{
          box.hidden = true;
        }
      }
    }
    this.pageNumber = pageNumber;
    this.products = this.productService.getProductByPage(this.pageNumber,9)
  }
  constructor(
    private route: ActivatedRoute,
    private productService : ProductServce,
    private clientService : ClientService,
    private companyService : CompanyService
  ) { }
  pageNumber : number = 0;
  index : number = 0;
  products! : Observable<getProduct[]>;
  ngOnInit(): void {



    var not = document.getElementById('openNot');
    console.log(not);
    if(not){
      not.addEventListener('click', () => this.openNotifications());
    }
    
    this.route.params.forEach(
      param => {
        this.pageNumber = param['pageNumber']
      })

    this.productService.getProductsMaxPage(9).subscribe((res:number) =>
      { 
        let c = document.getElementById('productLastPage')
        if(c){
          c.setAttribute('id', 'reviewLastPage'.concat(res.toString()))
          c.addEventListener('click', () => this.changePage(res, false));
        }
        this.lastPage = res;
        this.changePage(this.pageNumber, true);
      });



    document.getElementById("switch")?.addEventListener("click", this.changeTheme);
    var theme = localStorage.getItem('Theme');
    if(theme == 'Black'){
      var button = document.getElementById('check') as HTMLInputElement
      button.checked = true
      setTimeout(() => this.setTheme(), 100)
    }
    var token = localStorage.getItem('token');
    if(token != null){
      if(token != ""){

        var decode = jwt_decode<AuthToken>(token.toString())
        
        this.userType = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        this.userName = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
      }
    }
    if(this.userType == 'Client'){
      this.clientService.getClientByName(this.userName).subscribe(rez => this.userId = rez.clientProfileId)
    }
    if(this.userType == 'Company'){
      this.companyService.getCompanyByName(this.userName).subscribe(rez => this.userId = rez.companyProfileId)
    }
    setTimeout(() => this.setTheme(),500);
  }

}
