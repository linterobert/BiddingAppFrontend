import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/interfaces/product-card';
import { CountDownPipe } from 'src/pipes/countdown';
import { Observable } from 'rxjs';
import { getProduct } from 'src/interfaces/getProduct';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {
  @Input() product_list! : Observable<getProduct[]>;
 
  constructor() { }


  ngOnInit(): void {

    var productList = document.getElementById('productList');
    var product = document.createElement('app-product-card')
    productList?.append(product);
  }

}
