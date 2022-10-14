import { Component, OnInit } from '@angular/core';
import { CountDownPipe } from 'src/pipes/countdown';
import { ProductCard } from 'src/interfaces/product-card';
import { ClientService } from 'src/app/services/client.service';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})


export class ClientProfileComponent implements OnInit {

  @Input() clientId = 0;
  fundsComponent = false;
  cashOutComponent = false;
  addCardComponent = false;
  viewOwnProductsComponent = false;
  viewOwnReviewsComponent = false;
  clientDetails! : Observable<any>
  constructor(
    private clientService : ClientService
  ) { }

  ngOnInit(): void {
    this.clientDetails = this.clientService.getClientByID(this.clientId.toString());
    
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
      this.viewOwnReviewsComponent = false;
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
      var viewOwnProductsBar = document.getElementById('viewOwnReviewsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = '40px';
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
      this.viewOwnProductsComponent = false;
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
      var viewOwnProductsBar = document.getElementById('viewOwnProductsBar');
      if(viewOwnProductsBar){
        viewOwnProductsBar.style.height = '40px';
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
