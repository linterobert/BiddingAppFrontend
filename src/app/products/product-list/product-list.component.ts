import { Component, NgModule, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductServce } from 'src/app/services/product.service';
import { getProduct } from 'src/interfaces/getProduct';
import { map, of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {


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

  constructor(
    private route: ActivatedRoute,
    private productService : ProductServce
  ) { }
  pageNumber : number = 0;
  index : number = 0;
  products! : Observable<getProduct[]>;
  ngOnInit(): void {

    this.products = this.productService.getProducts();

    
    this.route.params.forEach(
      param => {
        this.pageNumber = param['id']
        this.index = param['index']
      })
    var pagination = document.getElementById('pagination')
    var box
    if(this.pageNumber > 0){
      box = document.getElementById('page1');
      if(box){
        box.innerHTML = (this.pageNumber - 1).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page2');
      if(box){
        box.innerHTML = (this.pageNumber).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page3');
      if(box){
        box.innerHTML = (this.pageNumber - (-1)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page4');
      if(box){
        box.innerHTML = (this.pageNumber - (-2)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page5');
      if(box){
        box.innerHTML = (this.pageNumber - (-3)).toString();
        box.setAttribute('href', '#');
      }
      box = document.getElementById('page6');
      if(box){
        box.innerHTML = (this.pageNumber - (-4)).toString();
        box.setAttribute('href', '#');
      }
      if(this.pageNumber == 1){
        document.getElementById('page1')?.remove();
      }
    }



    document.getElementById("switch")?.addEventListener("click", this.changeTheme);
    var theme = localStorage.getItem('Theme');
    if(theme == 'Black'){
      var button = document.getElementById('check') as HTMLInputElement
      button.checked = true
      setTimeout(() => this.setTheme(), 1)
    }
    
    this.setTheme();
  }

}
