import { Component, OnInit } from '@angular/core';
import { CountDownPipe } from 'src/pipes/countdown';
import { ProductCard } from 'src/interfaces/product-card';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})


export class ClientProfileComponent implements OnInit {
  public countdown( x: Date ) : void{
    const products = document.getElementsByClassName('timer');

    for(let i = 0; i < products.length; i++){
      var product = products[i] as HTMLElement;
      var pipe = new CountDownPipe;
      product.innerHTML = pipe.transform(x.toString());
      var color = product.style.color;
      if(color != "red"){
        product.style.color = "red";
      }
      else{
        product.style.color = "black";
      }
    }
  }

  fundsComponent = false;
  cashOutComponent = false;
  addCardComponent = false;
  viewOwnProductsComponent = false;
  viewOwnReviewsComponent = false;
  constructor() { }

  product_card : ProductCard = {
    id : 1,
    name : "Produs nou",
    profilePhoto : 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    starNumber : 3.45,
    finalTime : new Date("Jan 5, 2023 15:37:25"),
    price : 35.33
  }  

  ngOnInit(): void {
    
    setInterval(() => this.countdown(this.product_card.finalTime),1000)
  }
  addFundsFunction(){
    if(this.fundsComponent != true){
      this.fundsComponent = true;
      this.cashOutComponent = false;
      this.addCardComponent = false;
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = 'auto';
      }
      var cashOutBar = document.getElementById('cashOutBar');
      if(cashOutBar){
        cashOutBar.style.height = '40px';
      }
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = '40px';
      }
    }
    else{
      this.fundsComponent = false;
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
    }
  }
  cashOutFunction(){
    if(this.cashOutComponent != true){
      this.fundsComponent = false;
      this.cashOutComponent = true;
      this.addCardComponent = false;
      
      var cashBar = document.getElementById('cashOutBar');
      if(cashBar){
        cashBar.style.height = 'auto';
      }
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = '40px';
      }
    }
    else{
      this.cashOutComponent = false;
      var fundsBar = document.getElementById('cashOutBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
    }
  }
  addCardFunction(){
    if(this.addCardComponent != true){
      this.fundsComponent = false;
      this.addCardComponent = true;
      this.cashOutComponent = false;
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = 'auto';
      }
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
      var cashOutBar = document.getElementById('cashOutBar');
      if(cashOutBar){
        cashOutBar.style.height = '40px';
      }
    }
    else{
      this.addCardComponent = false;
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = '40px';
      }
    }
  }
  viewOwnProductsFunction(){
    if(this.viewOwnProductsComponent != true){
      this.fundsComponent = false;
      this.addCardComponent = false;
      this.cashOutComponent = false;
      this.viewOwnProductsComponent = true
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = '40px';
      }
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
      var cashOutBar = document.getElementById('cashOutBar');
      if(cashOutBar){
        cashOutBar.style.height = '40px';
      }
      var viewOwnProductsBar = document.getElementById('viewOwnProductsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = 'auto';
      }
    }
    else{
      this.viewOwnProductsComponent = false;
      var viewOwnProductsBar = document.getElementById('viewOwnProductsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = '40px';
      }
    }
  }
  viewOwnReviewsFunction(){
    if(this.viewOwnReviewsComponent != true){
      this.fundsComponent = false;
      this.addCardComponent = false;
      this.cashOutComponent = false;
      this.viewOwnReviewsComponent = true
      var addCardBar = document.getElementById('addCardBar');
      if(addCardBar){
        addCardBar.style.height = '40px';
      }
      var fundsBar = document.getElementById('addFundsBar');
      if(fundsBar){
        fundsBar.style.height = '40px';
      }
      var cashOutBar = document.getElementById('cashOutBar');
      if(cashOutBar){
        cashOutBar.style.height = '40px';
      }
      var viewOwnProductsBar = document.getElementById('viewOwnReviewsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = 'auto';
      }
    }
    else{
      this.viewOwnReviewsComponent = false;
      var viewOwnProductsBar = document.getElementById('viewOwnReviewsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = '40px';
      }
    }
  }
}
