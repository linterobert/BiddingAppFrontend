import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';
import { CountDownPipe } from 'src/pipes/countdown';

@Component({
  selector: 'app-view-products-list',
  templateUrl: './view-products-list.component.html',
  styleUrls: ['./view-products-list.component.css']
})
export class ViewProductsListComponent implements OnInit {

  product_card : ProductCard = {
    id : 1,
    name : "Produs nou",
    profilePhoto : 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    starNumber : 3.45,
    finalTime : new Date("Jan 5, 2023 15:37:25"),
    price : 35.33
  }  

  product_list = [this.product_card, this.product_card, this.product_card]

  constructor() { }

  ngOnInit(): void {

    var productList = document.getElementById('productList');
    var product = document.createElement('app-product-card')
    productList?.append(product);

    
  }

}
